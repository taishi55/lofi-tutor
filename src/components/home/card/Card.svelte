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
    copyTable,
    copyHTML,
  } from "../../../store";

  export let item: ChatMessageModel;
  let copyIcon = false;
  let cursorX = 0;
  let cursorY = 0;
  let isHighlighted = false;
  let isHoveringCode = false;
  let isHoveringTable = false;
  let isHoveringArticle = false;
  let hideCopyBtn = false;

  function handleMouseMove(event: MouseEvent) {
    const isButton: HTMLElement | null =
      (event.target as Element)?.closest("button") || null;

    if (!isButton) {
      cursorX = event.pageX + 3;
      cursorY = event.pageY;
    }

    if (!hideCopyBtn && !isHighlighted && window?.getSelection()?.toString()) {
      hideCopyBtn = true;
    }
    if (window?.getSelection()?.toString()) return;

    const codeElement: HTMLElement | null =
      (event.target as Element)?.closest("code") || null;
    const tableElement: HTMLElement | null =
      (event.target as Element)?.closest("table") || null;
    const articleElement: HTMLElement | null =
      (event.target as Element)?.closest("div.message") || null;
    if (codeElement && codeElement?.textContent && !isButton) {
      $copyCode = codeElement.textContent;
      isHoveringCode = true;
    } else if (tableElement && tableElement?.textContent && !isButton) {
      $copyTable = tableElement.outerHTML;
      isHoveringTable = true;
    } else if (!isButton) {
      isHoveringCode = false;
      isHoveringTable = false;
    }

    if (
      (item.text.includes("# ") || item.text.includes("## ")) &&
      articleElement
    ) {
      const copyingButton = articleElement.querySelector("#copying");
      $copyHTML = articleElement.innerHTML;
      if (copyingButton) {
        const regex = new RegExp(copyingButton.outerHTML, "g");
        $copyHTML = $copyHTML.replace(regex, "");
      }
      isHoveringArticle = true;
    } else {
      $copyHTML = "";
      isHoveringArticle = false;
    }
  }

  function isTextHighlighted() {
    const selection = window.getSelection();
    isHighlighted = selection && selection.toString().length > 0;
    hideCopyBtn = false;
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
      {#if item.text}
        <div
          class={$isSpeeching &&
          $currentSpeechPlayingItemId === item.id &&
          $isGirlTalking
            ? "message message-bg !bg-pink-200 dark:!bg-pink-700/30 relative border border-pink-300 dark:border-pink-600/80"
            : $isSpeeching && $currentSpeechPlayingItemId === item.id
            ? "message message-bg !bg-blue-200 dark:!bg-blue-700/30 relative border border-blue-400 dark:border-blue-600/80"
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
          <MarkdownPreview markdown={item.text} />

          {#if copyIcon && cursorY && cursorX && !hideCopyBtn}
            <CopyButton
              {isHighlighted}
              {isHoveringCode}
              {isHoveringTable}
              {isHoveringArticle}
              {item}
              {cursorX}
              {cursorY}
            />
          {/if}
        </div>
      {:else}
        <LoadingIcon />
      {/if}
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
