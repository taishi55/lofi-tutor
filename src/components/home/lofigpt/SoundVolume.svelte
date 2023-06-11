<script lang="ts">
  import { isPlayingMusic } from "../../../store";
  import { getRandomMusic, muteNonActiveTabs } from "../../../store/function";

  let isLoading = false;

  const toggle = () => {
    if (isLoading) {
      return;
    }
    $isPlayingMusic = !$isPlayingMusic;
    const audio: HTMLAudioElement | null = document.querySelector("#bg-music");

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

<button
  on:click={() => {
    toggle();
    muteNonActiveTabs();
  }}
  class="lofigpt-menu-icon"
>
  {#if $isPlayingMusic && !isLoading}
    <i class="fa-solid fa-volume-high" />
  {:else if !$isPlayingMusic && !isLoading}
    <i class="fa-solid fa-volume-xmark" />
  {:else}
    <div class=" animate-pulse">
      <i class="fa-solid fa-spinner animate-spin" />
    </div>
  {/if}
</button>
