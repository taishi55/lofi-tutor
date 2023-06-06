<script lang="ts">
  import ProfileImage from "./ProfileImage.svelte";
  import type { ChatMessageModel } from "../../../chat/types";
  import LoadingIcon from "./LoadingIcon.svelte";
  import MarkdownPreview from "./MarkdownPreview.svelte";
  import CopyButton from "./CopyButton.svelte";
  import {
    copyCode,
    isSpeeching,
    currentSpeechPlayingItemId,
    isGirlTalking,
  } from "../../../store";

  export let item: ChatMessageModel;
  let copyIcon = false;
  let cursorX = 0;
  let cursorY = 0;
  let isHighlighted = false;
  let isHoveringCode = false;

  function handleMouseMove(event: MouseEvent) {
    cursorX = event.pageX + 5;
    cursorY = event.pageY + 8;

    const codeElement: HTMLElement | null =
      (event.target as Element)?.closest("code") || null;
    const isButton: HTMLElement | null =
      (event.target as Element)?.closest("button") || null;
    if (codeElement && codeElement?.textContent && !isButton) {
      $copyCode = codeElement.textContent;
      isHoveringCode = true;
    } else if (!isButton) {
      isHoveringCode = false;
    }
  }

  function isTextHighlighted() {
    const selection = window.getSelection();
    isHighlighted = selection && selection.toString().length > 0;
  }
</script>

<div id={item.id}>
  <div>
    <div class="card-wrap">
      <div class="pr-2 pl-4 sticky top-0">
        <div class=" w-8">
          <ProfileImage {item} />
        </div>
      </div>

      <div
        class={$isSpeeching &&
        $currentSpeechPlayingItemId === item.id &&
        $isGirlTalking
          ? "message message-bg !bg-blue-200 dark:!bg-blue-600 relative border border-pink-300 dark:border-pink-700"
          : $isSpeeching && $currentSpeechPlayingItemId === item.id
          ? "message message-bg !bg-blue-200 dark:!bg-blue-600 relative border border-blue-400 dark:border-blue-700"
          : "message message-bg relative border border-transparent"}
        on:mouseenter={() => {
          copyIcon = true;
        }}
        on:mousemove={handleMouseMove}
        on:mouseleave={() => {
          copyIcon = false;
        }}
        on:mouseup={isTextHighlighted}
      >
        {#if item.text}
          <MarkdownPreview markdown={item.text} />
        {:else}
          <LoadingIcon />
        {/if}

        {#if copyIcon && cursorY && cursorX}
          <CopyButton
            {isHighlighted}
            {isHoveringCode}
            {item}
            {cursorX}
            {cursorY}
          />
        {/if}
      </div>
    </div>
  </div>

  {#if item.new}
    <hr
      class="border-b border-dashed border-slate-300 dark:border-slate-600 my-3"
    />
  {:else}
    <hr class="invisible my-2" />
  {/if}
</div>

<style lang="postcss" scoped>
  .card-wrap {
    @apply flex flex-nowrap items-start;
  }

  .message {
    @apply flex-1 p-2 whitespace-pre-line rounded-md mr-4 max-w-full transition-all duration-500 ease-in-out;
  }
</style>
