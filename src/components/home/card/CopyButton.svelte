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
  let plainText = "";

  function removeClassFromString(inputString: string) {
    return inputString.replace(/class=".*?"/g, "");
  }

  const copyEvent = (event: ClipboardEvent) => {
    event.preventDefault(); // Prevent the default copy behavior

    const highlightedText: string = window?.getSelection()?.toString() || "";
    if (isHighlighted && highlightedText) {
      event.clipboardData.setData("text/html", highlightedText);
      event.clipboardData.setData("text/plain", highlightedText);
    }

    if (isHoveringTable && $copyTable) {
      event.clipboardData.setData("text/html", $copyTable);
      event.clipboardData.setData("text/plain", plainText);
    }

    if (isHoveringArticle && $copyHTML) {
      event.clipboardData.setData(
        "text/html",
        removeClassFromString($copyHTML)
      );
      event.clipboardData.setData("text/plain", plainText);
    }
  };

  const copyRichText = () => {
    document.addEventListener("copy", copyEvent);
    document.execCommand("copy");
    setTimeout(() => {
      document.removeEventListener("copy", copyEvent);
    }, 50);
  };

  const copyText = async () => {
    const highlightedText: string = window?.getSelection()?.toString() || "";
    if (isHighlighted && highlightedText) {
      navigator.clipboard.writeText(highlightedText);
    } else if (isHoveringCode && $copyCode) {
      navigator.clipboard.writeText($copyCode);
    } else if (isHoveringTable && $copyTable) {
      // navigator.clipboard.write(keepStyleHTML($copyTable, item.text));
      plainText = item.text;
      copyRichText();
    } else if (isHoveringArticle && $copyHTML) {
      plainText = item.text;
      // keepStyleHTML(removeClassFromString($copyHTML), item.text);
      copyRichText();
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
  on:click={copyText}
  in:fade={{ duration: 500 }}
  style="position: fixed; top: {cursorY}px; left: {cursorX}px;"
  class="pl-2 pt-2 transition-all duration-500 ease-linear"
>
  <button
    id="copying"
    class={isCopied
      ? "bg-green-600 dark:bg-green-700 border-green-600 dark:border-green-700 text-white copy-button"
      : "bg-slate-200 dark:bg-slate-700 border-slate-400  dark:border-slate-600 copy-button"}
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
      <div class="text-xs select-none">
        {customLang[$currentLocale].system.article}
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
</button>

<style lang="postcss" scoped>
  .copy-button {
    @apply border select-none transition-all duration-200 ease-linear rounded-md px-2 py-1 text-xs flex items-center space-x-1;
  }
</style>
