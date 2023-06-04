<script lang="ts">
  import { onMount } from "svelte";
  import Command from "./Command.svelte";
  import DarkMode from "./DarkMode.svelte";
  import MusicMode from "./MusicMode.svelte";
  import ScreenSize from "./ScreenSize.svelte";
  import Voice from "./Voice.svelte";
  import { currentLocale } from "../../store";
  import Browser from "webextension-polyfill";
  import { langs, customLang } from "../../store/lang";
  import type { LangCode } from "../../store/langTypes";

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
    const result = await Browser.storage.sync.get("langOption");
    if (result?.langOption) {
      currentLocale.set(result.langOption);
    } else {
      currentLocale.set(checkLocale());
      await Browser.storage.sync.set({ langOption: $currentLocale });
    }
  });
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
