<script lang="ts">
  import Browser from "webextension-polyfill";
  import {
    currentLocale,
    incomingSpeechItems,
    isGirlTalking,
    isSpeeching,
    isVoiceOn,
  } from "../../store";
  import Toggle from "./Toggle.svelte";
  import { customLang } from "../../store/lang";

  const turnOffVoice = () => {
    const audio: HTMLAudioElement | null = document.querySelector("#voice");
    if (!audio) return;
    $isSpeeching = false;
    $isGirlTalking = false;
    incomingSpeechItems.set([]);
    audio.pause();
    audio.src = "";
    audio.load();
  };

  const setMusicVolume = (volume: number) => {
    const audio: HTMLAudioElement | null = document.querySelector("#bg-music");
    if (audio?.volume) {
      audio.volume = volume;
    }
  };

  const save = async () => {
    await Browser.storage.sync.set({ voiceSwitch: $isVoiceOn });
  };

  const requesting = () => {
    if ($isVoiceOn) {
      turnOffVoice();
      setMusicVolume(1);
    }
    $isVoiceOn = !$isVoiceOn;
    save();
  };
</script>

<Toggle
  label={customLang[$currentLocale].system.voice}
  toggle={requesting}
  isChecked={$isVoiceOn}
  id="voice-switch"
/>
