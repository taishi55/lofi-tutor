import Browser from "webextension-polyfill";
import type { ChatMessageModel } from "../chat/types";
import { delayAsync } from "../store/function";
import { customLang } from "../store/lang";

var sidebarWidth = 35;

if (!document.querySelector("#beyond_gafa_trigger")) {
  createButton();
}

// Listen messages
Browser.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  try {
    if (Browser.runtime.lastError) {
      return;
    }
    // Check if the message contains a command
    if (request?.command === "toggle-sidebar") {
      await toggleSidebar();
    }

    if (request?.reinitialize) {
      reinitialize();
    }

    if (request?.isHalfScreen === true) {
      sidebarWidth = 50;
      changeSidebarWidth();
    }

    if (request?.isHalfScreen === false) {
      sidebarWidth = 35;
      changeSidebarWidth();
    }

    if (request?.awsPolley) {
      await getAudioUrl(
        request.item,
        request.currentActiveTabId,
        request.createdTabId
      );
    }
    // return true;
  } catch (error) {
    console.log(error);
  }
});

function reinitialize() {
  const sidebar: HTMLIFrameElement | null =
    document.querySelector("#beyond_gafa");
  if (!sidebar) return;
  sidebar.src = "";
  sidebar.src = Browser.runtime.getURL("./index.html");
}

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
  try {
    const sidebar: HTMLIFrameElement | null =
      document.querySelector("#beyond_gafa");
    if (!document.querySelector("#beyond_gafa_trigger")) {
      createButton();
    }
    if (!sidebar) {
      createSidebar();
      await toggleSidebar();
      return;
    }

    sidebar.style.width = `${sidebarWidth}vw`;
    if (sidebar.style.right === "0px" || sidebar.style.display === "block") {
      // close sidebar
      sidebar.style.right = `-100%`;
      setTimeout(() => {
        sidebar.style.display = "none";
      }, 500);
    } else {
      // open
      sidebar.style.display = "block";
      reinitialize();
      setTimeout(() => {
        sidebar.style.right = "0px";
      }, 50);
    }
  } catch (error) {
    console.log(error);
  }
}

function createButton() {
  const sidebarTriggerButtonContainer = document.createElement("div");
  sidebarTriggerButtonContainer.classList.add("sidebar-container");

  const sidebarTriggerButton = document.createElement("div");
  sidebarTriggerButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`;
  sidebarTriggerButton.id = "beyond_gafa_trigger";
  sidebarTriggerButton.classList.add("sidebar-trigger-button");
  sidebarTriggerButton.addEventListener("click", toggleSidebar);

  sidebarTriggerButtonContainer.appendChild(sidebarTriggerButton);
  document.body.appendChild(sidebarTriggerButtonContainer);
}

function createSidebar() {
  // console.log("sidebar is installed");
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar-container");

  const sidebar = document.createElement("iframe");
  sidebar.id = "beyond_gafa";
  sidebar.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;";
  sidebar.src = Browser.runtime.getURL("./index.html");
  sidebar.classList.add("sidebar-iframe");
  sidebarContainer.appendChild(sidebar);

  document.body.appendChild(sidebarContainer);
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
        if (audio.src) {
          await Browser.runtime.sendMessage({
            audioUrl: audio.src,
            item,
            currentActiveTabId,
            createdTabId,
            backendFeedback: true,
          });
        }
      } catch (error) {}
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
    audio.addEventListener("canplaythrough", handleCanPlayThrough);
  }

  const inputElement: HTMLInputElement | null =
    document.querySelector(".form-control");
  if (inputElement) {
    inputElement.value = item.text
      .replace(/\[\d+\]:\s.+\n/g, "") // bing
      .replace(/\[d\]:.*\n/g, "") // bing
      .replace(/[\p{Emoji}]/gu, "") // emoji
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
