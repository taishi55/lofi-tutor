import Browser from "webextension-polyfill";
import type { ChatMessageModel } from "../chat/types";
import { delayAsync } from "../store/function";
import { customLang } from "../store/lang";

var sidebarWidth = 35;

if (!document.querySelector("#beyond_gafa")) {
  createSidebar();
}

// Listen messages
Browser.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  try {
    // Check if the message contains a command
    if (request?.command === "toggle-sidebar") {
      await toggleSidebar();
    }

    if (request?.isHalfScreen === true) {
      sidebarWidth = 50;
      changeSidebarWidth();
    }

    if (request?.isHalfScreen === false) {
      sidebarWidth = 35;
      changeSidebarWidth();
    }

    if (request?.copyText) {
      navigator.clipboard.writeText(request?.copyText);
    }

    if (request?.awsPolley) {
      await getAudioUrl(
        request.item,
        request.currentActiveTabId,
        request.createdTabId
      );
    }
  } catch (error) {
    console.log(error);
  }
});

function changeSidebarWidth() {
  const sidebar: HTMLIFrameElement | null =
    document.querySelector("#beyond_gafa");
  if (!sidebar) {
    createSidebar();
    return;
  }
  sidebar.style.width = `${sidebarWidth}vw`;
}

async function toggleSidebar() {
  const sidebar: HTMLIFrameElement | null =
    document.querySelector("#beyond_gafa");

  if (!sidebar) {
    createSidebar();
    await toggleSidebar();
  }
  sidebar.style.width = `${sidebarWidth}vw`;
  if (sidebar.style.right === "0px") {
    // close sidebar
    sidebar.style.right = `-100%`;
  } else {
    // open
    sidebar.style.right = "0px";
  }
}

function createSidebar() {
  console.log("sidebar is installed");

  document.documentElement.classList.add("default-body");

  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add(
    "sidebar-container"
  );

  const sidebar = document.createElement("iframe");
  sidebar.id = "beyond_gafa";
  sidebar.src = Browser.runtime.getURL("./index.html");
  sidebar.classList.add("sidebar-iframe");
  sidebarContainer.appendChild(sidebar);

  document.body.appendChild(sidebarContainer);

  const sidebarTriggerButtonContainer = document.createElement("div");
  sidebarTriggerButtonContainer.classList.add(
    "sidebar-container"
  );

  const sidebarTriggerButton = document.createElement("div");
  sidebarTriggerButton.textContent = "Phantom";
  sidebarTriggerButton.id = "beyond_gafa_trigger";
  sidebarTriggerButton.classList.add("sidebar-trigger-button");
  sidebarTriggerButton.addEventListener("click", toggleSidebar);

  sidebarTriggerButtonContainer.appendChild(sidebarTriggerButton);
  document.body.appendChild(sidebarTriggerButtonContainer);
}

const changeVoice = async (isGirlVoice: boolean) => {
  const changeEvent = new Event("change", { bubbles: true });

  const selectQuality: HTMLSelectElement | null = document.querySelector(
    'select[name="voice-choose"]'
  );

  // const customLang = await customLangContent();

  const result = await Browser.storage.sync.get("langOption");

  let localeCode = "en-US";
  if (result?.langOption) {
    localeCode = result.langOption;
  }

  if (selectQuality && isGirlVoice) {
    selectQuality.value = customLang[localeCode].female.type;
    selectQuality.dispatchEvent(changeEvent);
  } else if (selectQuality) {
    selectQuality.value = customLang[localeCode].male.type;
    selectQuality.dispatchEvent(changeEvent);
  }
  await delayAsync(30);

  const selectStandardVoice: HTMLSelectElement | null = document.querySelector(
    'select[name="standard"]'
  );
  const selectNeuralVoice: HTMLSelectElement | null = document.querySelector(
    'select[name="neural"]'
  );
  const newOption = document.createElement("option");

  if (isGirlVoice) {
    newOption.value = customLang[localeCode].female.id;
    newOption.textContent = customLang[localeCode].female.id;

    if (
      selectStandardVoice &&
      customLang[localeCode].female.type === "standard"
    ) {
      selectStandardVoice.appendChild(newOption);
      selectStandardVoice.dispatchEvent(changeEvent);
      await delayAsync(10);
      selectStandardVoice.value = customLang[localeCode].female.id;
      selectStandardVoice.dispatchEvent(changeEvent);
    }

    if (selectNeuralVoice && customLang[localeCode].female.type === "neural") {
      selectNeuralVoice.appendChild(newOption);
      selectNeuralVoice.dispatchEvent(changeEvent);
      await delayAsync(10);
      selectNeuralVoice.value = customLang[localeCode].female.id;
      selectNeuralVoice.dispatchEvent(changeEvent);
    }
  } else {
    newOption.value = customLang[localeCode].male.id;
    newOption.textContent = customLang[localeCode].male.id;

    if (
      selectStandardVoice &&
      customLang[localeCode].male.type === "standard"
    ) {
      selectStandardVoice.appendChild(newOption);
      selectStandardVoice.dispatchEvent(changeEvent);
      await delayAsync(10);
      selectStandardVoice.value = customLang[localeCode].male.id;
      selectStandardVoice.dispatchEvent(changeEvent);
    }

    if (selectNeuralVoice && customLang[localeCode].male.type === "neural") {
      selectNeuralVoice.appendChild(newOption);
      selectNeuralVoice.dispatchEvent(changeEvent);
      await delayAsync(10);
      selectNeuralVoice.value = customLang[localeCode].male.id;
      selectNeuralVoice.dispatchEvent(changeEvent);
    }
  }
};

const getAudioUrl = async (
  item: ChatMessageModel,
  currentActiveTabId: number,
  createdTabId: number
) => {
  await changeVoice(item.author !== "user");

  const audio = document.querySelector("audio");

  if (audio) {
    audio.muted = true;
    audio.volume = 0;
    const handleCanPlayThrough = async () => {
      try {
        await Browser.runtime.sendMessage({
          audioUrl: audio.src,
          item,
          currentActiveTabId,
          createdTabId,
          backendFeedback: true,
        });
      } catch (error) { }
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
    audio.addEventListener("canplaythrough", handleCanPlayThrough);
  }

  const inputElement: HTMLInputElement | null =
    document.querySelector(".form-control");
  if (inputElement) {
    inputElement.value = item.text
      .replace(/[\p{Emoji}]/gu, "")
      .replace(/\[\d+\]:\s.+\n/g, "") // bing
      .replace(/```[\s\S]*?```/g, "") // code
      .replace(/https?:\/\/[ \s]+/g, "") // url
      .replace(/#/g, "")
      .slice(0, 3000); // max chars
    const changeEvent = new Event("change", { bubbles: true });
    inputElement.dispatchEvent(changeEvent);
  }

  const submitBtn = document.querySelector(".btn.btn-info");
  if (submitBtn) {
    const clickEvent = new Event("click", { bubbles: true });
    submitBtn.dispatchEvent(clickEvent);
  }
};
