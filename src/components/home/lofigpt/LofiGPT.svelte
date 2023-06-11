<script lang="ts">
  import { slide } from "svelte/transition";
  import ExpandIcon from "./ExpandIcon.svelte";
  import { cubicInOut } from "svelte/easing";
  import SoundVolume from "./SoundVolume.svelte";
  import Emotion from "./Emotion.svelte";
  import { isGirlTalking } from "../../../store";
  import LiveIcon from "./LiveIcon.svelte";
  // import YoutubePlayButton from "./YoutubePlayButton.svelte";

  let isHovered = false;
  let isExpanded = false;

  const toggleExpand = () => {
    isExpanded = !isExpanded;
  };
  const mouseenter = () => {
    isHovered = true;
  };
  const mouseleave = () => {
    isHovered = false;
  };
</script>

<div>
  {#if isExpanded}
    <div
      on:mouseenter={mouseenter}
      on:mouseleave={mouseleave}
      class="relative mt-3"
      transition:slide={{ duration: 400, easing: cubicInOut }}
    >
      <video
        poster="https://i.pinimg.com/videos/thumbnails/originals/24/37/e6/2437e61cd44acc7562cb27d565a01c86.0000000.jpg"
        preload="auto"
        src="https://v1.pinimg.com/videos/mc/expMp4/24/37/e6/2437e61cd44acc7562cb27d565a01c86_t3.mp4"
        style="object-fit: cover;"
        class="z-10"
        autoplay
        muted
        controls
        loop><track kind="captions" src="" /></video
      >
      <video
        class={$isGirlTalking ? "show" : "hide"}
        poster="https://i.pinimg.com/videos/thumbnails/originals/d8/42/6f/d8426fbb75d1ea085a5df8643dd3fe2b.0000000.jpg"
        preload="auto"
        src="https://v1.pinimg.com/videos/mc/expMp4/d8/42/6f/d8426fbb75d1ea085a5df8643dd3fe2b_t3.mp4"
        style="object-fit: cover;"
        autoplay
        muted
        controls
        loop><track kind="captions" src="" /></video
      >

      <div class=" absolute top-0 left-0 p-2 z-30">
        <LiveIcon />
      </div>

      {#if isHovered}
        <div class="absolute bottom-0 left-0 w-full p-2 z-30">
          <div class="flex justify-between items-center">
            <SoundVolume />
            <!-- <YoutubePlayButton /> -->
            <Emotion />
          </div>
        </div>
      {/if}
    </div>
  {/if}
  <ExpandIcon {toggleExpand} {isExpanded} />
</div>

<style lang="postcss" scoped>
  video {
    @apply rounded-md w-full aspect-video h-fit;
  }
  video::-webkit-media-controls-panel {
    @apply hidden opacity-100;
  }

  .show {
    @apply absolute top-0 left-0 opacity-100 z-20;
  }

  .hide {
    @apply absolute top-0 left-0 opacity-0 z-20;
  }
</style>
