<script lang="ts">
  import { fade } from "svelte/transition";
  import type { ChatMessageModel } from "../../../chat/types";
  import { copyCode, copyHTML, copyTable, currentLocale } from "../../../store";
  import { customLang } from "../../../store/lang";

  export let cursorX: number;
  export let cursorY: number;
  export let item: ChatMessageModel;
  export let isHighlighted = false;
  export let isHoveringCode = false;
  export let isHoveringTable = false;
  export let isHoveringArticle = false;
  let isCopied = false;

  function removeClassFromString(inputString: string) {
    return inputString.replace(/class=".*?"/g, "");
  }

  function keepStyleHTML(innerHTML: string) {
    return [
      new ClipboardItem({
        "text/html": new Blob([innerHTML], { type: "text/html" }),
      }),
    ];
  }

  const copyText = async () => {
    const highlightedText: string = window?.getSelection()?.toString() || "";
    if (isHighlighted && highlightedText) {
      navigator.clipboard.writeText(highlightedText);
    } else if (isHoveringCode && $copyCode) {
      navigator.clipboard.writeText($copyCode);
    } else if (isHoveringTable && $copyTable) {
      navigator.clipboard.write(keepStyleHTML($copyTable));
    } else if (isHoveringArticle && $copyHTML) {
      navigator.clipboard.write(
        keepStyleHTML(removeClassFromString($copyHTML))
      );
    } else {
      navigator.clipboard.writeText(item.text);
    }
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 3000);
  };
</script>

<button
  id="copying"
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
  {:else if isHoveringTable}
    <div class="select-none">
      <i class="fa-solid fa-table" />
    </div>
    <div class="text-xs select-none">
      {customLang[$currentLocale].system.table}
    </div>
  {:else if isHoveringArticle}
    <div class="select-none">
      <i class="fa-solid fa-newspaper" />
    </div>
    <div class="text-xs select-none">HTML</div>
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
