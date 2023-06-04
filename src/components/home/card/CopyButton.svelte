<script lang="ts">
  import { fade } from "svelte/transition";
  import type { ChatMessageModel } from "../../../chat/types";
  import { sendMessageToActiveTab } from "../../../store/function";
  import { copyCode, currentLocale } from "../../../store";
  import { customLang } from "../../../store/lang";

  export let cursorX: number;
  export let cursorY: number;
  export let item: ChatMessageModel;
  export let isHighlighted = false;
  export let isHoveringCode = false;
  let isCopied = false;

  const copyText = async () => {
    const highlightedText: string = window?.getSelection()?.toString() || "";
    if (isHighlighted && highlightedText) {
      await sendMessageToActiveTab({ copyText: highlightedText });
    } else if (isHoveringCode && $copyCode) {
      await sendMessageToActiveTab({ copyText: $copyCode });
    } else {
      // remove links
      await sendMessageToActiveTab({
        copyText: item.text,
      });
    }
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 3000);
  };
</script>

<button
  on:click={copyText}
  in:fade={{ duration: 500 }}
  style="position: fixed; top: {cursorY}px; left: {cursorX}px;"
  class={isCopied
    ? "bg-green-600 dark:bg-green-700 border-green-600 dark:border-green-700 text-white"
    : "bg-slate-200 dark:bg-slate-700 border-slate-400  dark:border-slate-600 "}
>
  {#if isCopied}
    <div class="select-none">
      <i class="fa-solid fa-circle-check" />
    </div>
    <div class="text-xs select-none">
      {customLang[$currentLocale].system.copy}
    </div>
  {:else if isHighlighted}
    <div class="select-none">
      <i class="fa-solid fa-highlighter" />
    </div>
    <div class="text-xs select-none">
      {customLang[$currentLocale].system.highlight}
    </div>
  {:else if isHoveringCode}
    <div class="select-none">
      <i class="fa-solid fa-code" />
    </div>
    <div class="text-xs select-none">
      {customLang[$currentLocale].system.code}
    </div>
  {:else}
    <div class="select-none">
      <i class="fa-solid fa-copy" />
    </div>
    <div class="text-xs select-none">
      {customLang[$currentLocale].system.copy}
    </div>
  {/if}
</button>

<style lang="postcss" scoped>
  button {
    @apply border select-none transition-all duration-500 ease-linear rounded-md px-2 py-1 text-xs flex items-center space-x-1;
  }
</style>
