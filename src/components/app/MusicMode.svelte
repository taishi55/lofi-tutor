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
    try {
      if (isLoading) {
        $isPlayingMusic = true;
        return;
      }
      $isPlayingMusic = !$isPlayingMusic;
      const audio: HTMLAudioElement | null =
        document.querySelector("#bg-music");
      if (!audio) return;
      incomingSpeechItems.set([]);

      if ($isPlayingMusic) {
        audio.src = getRandomMusic();
        audio.play();
        setTimeout(() => {
          if (isLoading) {
            isLoading = false;
            $isPlayingMusic = !$isPlayingMusic;
          }
        }, 8000);

        isLoading = true;
        audio.addEventListener("canplay", () => {
          isLoading = false;
        });

        audio.addEventListener("error", () => {
          console.error("Error loading audio:", audio.src);
        });
      } else {
        audio.pause();
        audio.src = "";
      }

      const voice: HTMLAudioElement | null = document.querySelector("#voice");
      if (voice) {
        voice.load();
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
