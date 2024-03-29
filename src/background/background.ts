import Browser from "webextension-polyfill";
import { sendMessageToActiveTab } from "../store/function";
import { createBotInstance } from "../chat/bots";
import type { ChatMessageModel } from "../chat/types";
import type { ChatGPTBot } from "../chat/bots/chatgpt";
import type { BingWebBot } from "../chat/bots/bing";
import type { BardBot } from "../chat/bots/bard";
import { CHATBOTS, type ModelType } from "../chat/consts";
import { ConnectWith } from "../store";
import { customLang } from "../store/lang";

try {
  /************ Events to open sidebar *************/
  // Listener for when the extension's icon button is clicked
  Browser.action.onClicked.addListener(async (tab) => {
    try {
      const message = {
        command: "toggle-sidebar",
      };
      if (tab.id && tab.url && isValidPage(tab.url)) {
        await sendMessageToActiveTab(message);
      } else {
        const newTab = await Browser.tabs.create({
          url: "https://chatgpt-phantom.vercel.app",
        });
        Browser.tabs.onUpdated.addListener(async function (
          tabId,
          changeInfo,
          tab
        ) {
          if (changeInfo.status === "complete" && newTab?.id === tab.id) {
            await Browser.tabs.sendMessage(newTab.id, message);
          }
        });
      }
    } catch (error) {}
  });

  /********** install event **********/
  Browser.runtime.onInstalled.addListener(async (details) => {
    try {
      if (details.reason === "install") {
        await Browser.storage.sync.set({
          voiceSwitch: false,
          scrollSwitch: true,
        });
        await Browser.tabs.create({
          url: "https://chatgpt-phantom.vercel.app/#downloaded",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });

  // Listen commands and send the signal to content.js
  Browser.commands.onCommand.addListener(async function (command) {
    try {
      // Get the active tab
      await sendMessageToActiveTab({ command: command });
    } catch (error) {
      console.log("command", error);
    }
  });

  Browser.runtime.onMessage.addListener(async function (
    request,
    sender,
    sendResponse
  ) {
    try {
      // get speech text from client
      if (request?.clientRequest && request?.item) {
        await sendMessageToHiddenTab(
          request.item,
          request.currentActiveTabId,
          "https://ai-service-demos.go-aws.com/polly"
        );
      }
      // get speech url from vendor
      if (
        request?.backendFeedback &&
        request?.item &&
        request?.currentActiveTabId
      ) {
        await Browser.windows.remove(request.createdTabId);
        await Browser.tabs.sendMessage(request.currentActiveTabId, {
          audioUrl: request.audioUrl,
          item: request.item,
          currentActiveTabId: request.currentActiveTabId,
          isTransmittedBackend: true,
        });
      }
      // mute non active tabs
      if (request?.musicTab) {
        await muteNonActiveTabs(request.musicTab);
      }
      // return true;
    } catch (error) {
      console.log(error);
    }
  });

  Browser.runtime.onConnect.addListener(function (port: Browser.Runtime.Port) {
    try {
      if (port?.name && port.name === ConnectWith.getResponse) {
        port.onMessage.addListener(async function (message) {
          if (message.type === ConnectWith.getResponse) {
            await getResponse(
              port,
              message.generatingMessageId,
              message.queryText,
              message.botModel,
              message.messages
            );
          }
          if (message.type === ConnectWith.resetConversation) {
            await resetConversation();
          }
          if (message.type === ConnectWith.stopGenerating) {
            stopGenerating(port);
          }
        });
      }
    } catch (error) {
      console.log("backend", error);
    }
  });

  var currentBot: ChatGPTBot | BingWebBot | BardBot = createBotInstance(
    CHATBOTS[2].id
  );
  var generatingMessageIdStore: string = "";
  var abortControllerStore: AbortController = new AbortController();
  var messagesStore: ChatMessageModel[] = [];
} catch (error) {
  console.log(error);
}

const getResponse = async (
  port: Browser.Runtime.Port,
  generatingMessageId: string | null | undefined,
  tempQueryText: string,
  botModel: ModelType,
  messages: ChatMessageModel[]
) => {
  messagesStore = messages;
  currentBot = createBotInstance(botModel.id);

  // create your chat message
  generatingMessageIdStore = generatingMessageId || "";
  abortControllerStore = new AbortController();

  await currentBot.sendMessage({
    prompt: tempQueryText,
    signal: abortControllerStore.signal,
    async onEvent(event) {
      if (event.type === "UPDATE_ANSWER" && event.data.text) {
        updateMessage(port, event.data.text);
      } else if (event.type === "ERROR") {
        if (!event.data.text) {
          const resultLang = await Browser.storage.sync.get("langOption");
          let defaultLang = "en-US";
          if (resultLang?.langOption) {
            defaultLang = resultLang.langOption;
          }
          event.data.text = customLang[defaultLang].system.error.accident;
        }
        updateMessage(port, event.data.text);
        port.postMessage({ message: "done" });
        abortControllerStore = undefined;
        generatingMessageIdStore = "";
        resetConversation();
      } else if (event.type === "DONE") {
        abortControllerStore = undefined;
        generatingMessageIdStore = "";
        port.postMessage({ message: "done" });
      }
    },
  });
};

const updateMessage = (
  port: Browser.Runtime.Port,
  text: string | undefined
) => {
  messagesStore = messagesStore.map((m) => {
    if (m.id === generatingMessageIdStore && text) {
      m.text = text;
      port.postMessage({ message: m });
    }
    return m;
  });
};

const resetConversation = async () => {
  if (currentBot) {
    await currentBot.resetConversation();
  }
  abortControllerStore = undefined;
  generatingMessageIdStore = "";
  messagesStore = [];
};

const stopGenerating = (port: Browser.Runtime.Port) => {
  if (abortControllerStore) {
    abortControllerStore.abort();
  }
  if (generatingMessageIdStore) {
    generatingMessageIdStore = "";
    updateMessage(
      port,
      "Oh no! 🙅‍♂️ It appears that the text generation process has been cancelled. If you have any specific requests or questions, please feel free to ask, and I'll be more than happy to assist you. Let's continue the conversation! 😊"
    );
    port.postMessage({ message: "done" });
  }
};

export async function sendMessageToHiddenTab(
  item: ChatMessageModel,
  currentActiveTabId: number,
  url: string
) {
  try {
    const newWindow = await openNewWindow(url);
    Browser.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
      if (
        changeInfo.status === "complete" &&
        newWindow.windowId === tab.windowId &&
        newWindow.tabId === tab.id
      ) {
        // console.log(createdTabId, tabId, tab.windowId)
        await Browser.tabs.sendMessage(tabId, {
          item,
          currentActiveTabId,
          createdTabId: newWindow.windowId,
          awsPolley: true,
        });
      }
    });
  } catch (error) {
    console.log("Error in background:", error);
  }
}

export const openNewWindow = async (url: string) => {
  const createdWindow = await Browser.windows.create({
    url: url,
    type: "popup",
    state: "minimized",
  });
  return { windowId: createdWindow.id, tabId: createdWindow.tabs[0].id };
};

const muteNonActiveTabs = async (currentActiveTabId: number) => {
  const tabs = await Browser.tabs.query({});
  for (let index = 0; index < tabs.length; index++) {
    const tab = tabs[index];
    if (currentActiveTabId === tab.id) {
      await Browser.tabs.update(tab.id, { muted: false });
    } else {
      await Browser.tabs.update(tab.id, { muted: true });
    }
  }
};

const isValidPage = (url: string) => {
  return (
    url.startsWith("https://") &&
    !url.includes("chrome://") &&
    !url.includes("chrome-extension://") &&
    !url.startsWith("https://chrome.google.com")
  );
};
