<script lang="ts">
  import { onMount } from "svelte";
  import Command from "./Command.svelte";
  import DarkMode from "./DarkMode.svelte";
  import MusicMode from "./MusicMode.svelte";
  import ScreenSize from "./ScreenSize.svelte";
  import Voice from "./Voice.svelte";
  import {
    currentLocale,
    isDarkMode,
    isEmotional,
    isPlayingMusic,
    messages,
  } from "../../store";
  import Browser from "webextension-polyfill";
  import { langs, customLang } from "../../store/lang";
  import type { LangCode } from "../../store/langTypes";
  import type { ChatMessageModel } from "../../chat/types";

  const getCommands = () => {
    return [
      {
        title: customLang[$currentLocale].system.toggle,
        key1: "Alt",
        key2: "x",
      },
    ];
  };

  let commands = getCommands();

  $: if ($currentLocale) {
    commands = getCommands();
  }

  const checkLocale = (): LangCode => {
    const defaultVal: LangCode = "en-US";
    const lang = (navigator?.language as LangCode) || defaultVal;
    if (langs.some((l) => l.code === lang)) {
      return lang;
    }
    for (let index = 0; index < langs.length; index++) {
      const l = langs[index];
      if (lang.includes(l.code.split("-")[0])) {
        return l.code;
      }
    }
    return defaultVal;
  };

  onMount(async () => {
    // Add event listener for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);
    await handleVisibilityChange();
  });

  async function handleVisibilityChange() {
    try {
      if (document.hidden || document.visibilityState === "hidden") {
        // console.log("Current tab is not selected.");
      } else {
        // console.log("Current tab is selected.");

        const resultLocal = await Browser.storage.local.get(["messages"]);
        if ((resultLocal as { messages?: ChatMessageModel[] }).messages) {
          $messages = resultLocal.messages;
        }
        const tab = await Browser.tabs.query({
          active: true,
          currentWindow: true,
        });
        if (tab[0].mutedInfo && tab[0].mutedInfo.muted) {
          isPlayingMusic.set(false);
        }

        const result = await Browser.storage.sync.get([
          "langOption",
          "isEmotional",
          "darkMode",
        ]);
        if (result?.langOption) {
          currentLocale.set(result.langOption);
        } else {
          currentLocale.set(checkLocale());
          await Browser.storage.sync.set({ langOption: $currentLocale });
        }
        if (result?.isEmotional) {
          $isEmotional = true;
        } else {
          $isEmotional = false;
          currentLocale.set(checkLocale());
          await Browser.storage.sync.set({ isEmotional: $isEmotional });
        }

        if (result?.darkMode) {
          document.body.setAttribute("data-theme", "dark");
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("dark");
          $isDarkMode = true;
          Browser.storage.sync.set({ darkMode: $isDarkMode });
        } else {
          document.body.setAttribute("data-theme", "light");
        }

        const container = document.querySelector("#chat-results");

        if (container) {
          // Scroll to the bottom of the container
          container.scrollTop = container.scrollHeight;
        }
      }
    } catch (error) {}
  }
</script>

<div class=" font-extralight flex justify-between items-center px-4 pb-3">
  <div>
    {#each commands as command, index}
      <Command title={command.title} key1={command.key1} key2={command.key2} />
    {/each}
    <audio id="bg-music" class=" w-0 h-0" />
    <audio id="voice" class=" w-0 h-0" />
  </div>

  <div class="flex items-center space-x-3">
    <div>
      <ScreenSize />
    </div>
    <div>
      <Voice />
    </div>
    <div>
      <MusicMode />
    </div>
    <div>
      <DarkMode />
    </div>
  </div>
</div>
