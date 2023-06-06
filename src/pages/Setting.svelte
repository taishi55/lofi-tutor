<script lang="ts">
  import { onMount } from "svelte";

  // get data
  import {
    getUserConfig,
    BingConversationStyle,
    ChatGPTWebModels,
    updateUserConfig,
  } from "../chat/services/user-config";
  import Selection from "../components/setting/Selection.svelte";
  import type { UserConfig } from "../chat/services/user-config";
  import Browser from "webextension-polyfill";
  import SwitchBtn from "../components/setting/SwitchBtn.svelte";
  import {
    isEmotional,
    isDarkMode,
    selectionvalue,
    currentLocale,
  } from "../store";
  import Base from "../components/share/Base.svelte";
  import { customLang, langs } from "../store/lang";

  let currentModel: ChatGPTWebModels | undefined = undefined;
  let currentStyle: BingConversationStyle | undefined = undefined;
  let userConfig: UserConfig;
  let voiceSwitch = false;
  let scrollSwitch = false;
  let currentLang = customLang[$currentLocale].lang;

  let isMounted = false;

  onMount(async () => {
    setTimeout(() => {
      isMounted = true;
    }, 300);

    userConfig = await getUserConfig();
    currentModel = userConfig.chatgptWebappModelName;
    currentStyle = userConfig.bingConversationStyle;

    const result = await Browser.storage.sync.get([
      "voiceSwitch",
      "scrollSwitch",
      "isEmotional",
      "darkMode",
      "langOption",
    ]);
    if (result?.voiceSwitch) {
      voiceSwitch = true;
    }
    if (result?.scrollSwitch) {
      scrollSwitch = true;
    }
    if (result?.isEmotional) {
      $isEmotional = true;
    } else {
      $isEmotional = false;
    }

    if (result?.darkMode) {
      $isDarkMode = true;
    }
    if (result?.langOption) {
      const savedOne = langs.find((l) => l.code === result?.langOption);
      if (savedOne) {
        currentLang = savedOne.lang;
      }
    }
  });

  let setChatGPTModel = async () => {
    currentModel = $selectionvalue.name;
    await updateUserConfig({
      chatgptWebappModelName: $selectionvalue.value,
    });
  };

  let setBingStyle = async () => {
    currentStyle = $selectionvalue.name;
    await updateUserConfig({
      bingConversationStyle: $selectionvalue.value,
    });
  };

  const setLang = async () => {
    currentLang = customLang[$selectionvalue.value].lang;
    currentLocale.set($selectionvalue.value);
    await Browser.storage.sync.set({ langOption: $selectionvalue.value });
  };

  const setVoice = async () => {
    voiceSwitch = !voiceSwitch;
    await Browser.storage.sync.set({ voiceSwitch });
  };

  const setAutoScroll = async () => {
    scrollSwitch = !scrollSwitch;
    await Browser.storage.sync.set({ scrollSwitch });
  };

  const setEmotional = async () => {
    $isEmotional = !$isEmotional;
    await Browser.storage.sync.set({ isEmotional: $isEmotional });
  };

  const setDarkMode = async () => {
    document.documentElement.classList.toggle("dark");
    $isDarkMode = !$isDarkMode;
    await Browser.storage.sync.set({ darkMode: $isDarkMode });
  };
</script>

{#if isMounted}
  <Base>
    <Selection
      label="model"
      type={currentModel}
      modelName="ChatGPT"
      items={Object.entries(ChatGPTWebModels).map(([name, value]) => ({
        name,
        value,
      }))}
      handleChange={setChatGPTModel}
    />
    <Selection
      label="style"
      type={currentStyle}
      modelName="Bing"
      items={Object.entries(BingConversationStyle).map(([name, value]) => ({
        name,
        value,
      }))}
      handleChange={setBingStyle}
    />
    <Selection
      label={customLang[$currentLocale].system.voice}
      type={currentLang}
      modelName={customLang[$currentLocale].system.voice}
      items={customLang[$currentLocale].langs.map((item) => ({
        name: item.lang,
        value: item.code,
      }))}
      handleChange={setLang}
    />
    <SwitchBtn
      handleAction={setVoice}
      lable={customLang[$currentLocale].system.voice}
      stitch={voiceSwitch}
    />
    <SwitchBtn
      handleAction={setEmotional}
      lable={`${customLang[$currentLocale].system.counselingMode} (ChatGPT)`}
      stitch={$isEmotional}
    />
    <SwitchBtn
      handleAction={setDarkMode}
      lable={customLang[$currentLocale].system.darkMode}
      stitch={$isDarkMode}
    />
    <SwitchBtn
      handleAction={setAutoScroll}
      lable={customLang[$currentLocale].system.autoScroll}
      stitch={scrollSwitch}
    />
  </Base>
{:else}
  <div class=" h-full" />
{/if}
