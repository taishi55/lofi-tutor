<script lang="ts">
  import { tick } from "svelte";
  import { templateItem, templatePage, templatePages } from "../../../store";
  import { queryText } from "../../../store";
  import type { templateItemType } from "../../../store";
  // @ts-ignore
  import autosize from "svelte-autosize";

  export let item: templateItemType;
  export let isItemHighlighted = false;

  export let closeWindow = () => {};
  const copyText = async () => {
    queryText.set(item.value);
    templateItem.set(item);
    closeWindow();

    await tick();
    const textarea = document.querySelector("#send-chat");
    if (textarea) {
      autosize.update(textarea);
    }
  };

  const deleteItem = () => {
    templateItem.set(item);
    $templatePage = templatePages.delete;
  };

  const editItem = () => {
    templateItem.set(item);
    $templatePage = templatePages.edit;
  };
</script>

<div class=" item" id={item.id}>
  <button
    on:click={copyText}
    class={isItemHighlighted
      ? "highlight label dark:text-white/90 hover:bg-slate-400/20"
      : "label hover:bg-slate-400/20"}
  >
    {item.label}
  </button>
  <div class=" flex items-center space-x-2">
    <button on:click={deleteItem} class=" hover:text-red-500 py-1">
      <i class="fa-solid fa-trash" />
    </button>
    <button on:click={editItem} class=" hover:text-blue-500 py-1">
      <i class="fa-solid fa-pen-to-square" />
    </button>
  </div>
</div>

<style lang="postcss" scoped>
  .highlight {
    animation: highlight 1.5s ease-out;
    animation-fill-mode: forwards;
  }

  @keyframes highlight {
    0% {
      background-color: rgb(250 204 21 / 0.6);
    }
    100% {
      background-color: transparent;
    }
  }

  .item {
    @apply flex justify-between items-center space-x-2 rounded;
  }

  .label {
    @apply block flex-1 text-left font-normal truncate py-1 rounded px-2;
  }
</style>
