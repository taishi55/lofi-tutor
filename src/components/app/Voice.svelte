<script lang="ts">
  import Browser from "webextension-polyfill";
  import { currentLocale, isSpeeching } from "../../store";
  import Toggle from "./Toggle.svelte";
  import { customLang } from "../../store/lang";

  const toggle = () => {
    const audio: HTMLAudioElement | null = document.querySelector("#voice");
    if (!audio) return;
    $isSpeeching = false;
    audio.pause();
    audio.src = "";
    audio.load();
  };

  const save = async () => {
    await Browser.storage.sync.set({ voiceSwitch: false });
  };

  const requesting = () => {
    toggle();
    save();
  };
</script>

<Toggle
  label={customLang[$currentLocale].system.voice}
  toggle={requesting}
  isChecked={$isSpeeching}
  id="voice-switch"
  disabled={!$isSpeeching}
/>
