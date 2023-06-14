<script lang="ts">
  import {
    currentLocale,
    incomingSpeechItems,
    isPlayingMusic,
  } from "../../store";
  import { getRandomMusic, muteNonActiveTabs } from "../../store/function";
  import { customLang } from "../../store/lang";
  import Toggle from "./Toggle.svelte";
  let isLoading = false;

  const toggleAudio = () => {
    if (isLoading) {
      $isPlayingMusic = true;
      return;
    }
    $isPlayingMusic = !$isPlayingMusic;
    const audio: HTMLAudioElement | null = document.querySelector("#bg-music");
    if (!audio) return;
    incomingSpeechItems.set([]);

    if ($isPlayingMusic) {
      audio.src = getRandomMusic();
      audio.play();
      isLoading = true;
      audio.addEventListener("canplay", () => {
        isLoading = false;
      });
    } else {
      audio.pause();
      audio.src = "";
    }

    try {
      const audio: HTMLAudioElement | null = document.querySelector("#voice");
      if (audio) {
        audio.load();
      }
    } catch (error) {}
  };
</script>

<Toggle
  label={customLang[$currentLocale].system.music}
  toggle={() => {
    toggleAudio();
    muteNonActiveTabs();
  }}
  isChecked={$isPlayingMusic}
  id="music"
  {isLoading}
/>
