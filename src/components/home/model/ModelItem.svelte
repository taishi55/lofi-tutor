<script lang="ts">
  import Browser from "webextension-polyfill";
  import type { ModelType } from "../../../chat/consts";
  import { botModel } from "../../../store";

  export let item: ModelType;
  export let isItemHighlighted = false;

  export let closeWindow = () => {};

  const selectModel = async () => {
    $botModel = item;
    isItemHighlighted = true;
    await Browser.storage.sync.set({ botModel: $botModel });
    setTimeout(() => {
      isItemHighlighted = false;
      closeWindow();
    }, 300);
  };
</script>

<div class=" item" id={item.id}>
  <button
    on:click={selectModel}
    class={isItemHighlighted
      ? "highlight label hover:bg-slate-400/20"
      : $botModel.id === item.id
      ? "label bg-blue-400/20"
      : "label hover:bg-slate-400/20"}
  >
    <div
      class=" w-full flex items-center space-x-2 whitespace-nowrap truncate py-1"
    >
      <div>
        <img src={item?.avatar} class=" w-5 h-5" alt="" />
      </div>
      <div class="font-semibold truncate">
        {item.name}
      </div>
    </div>
  </button>
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
    @apply block flex-1 text-left truncate py-1 rounded px-2;
  }
</style>
