<script lang="ts">
  import { fly } from "svelte/transition";
  import { clickOutside } from "../../store/function";
  import ArrowUp from "../home/share/ArrowUp.svelte";
  import { selectionvalue } from "../../store";

  export let modelName: string;
  export let type: any = "";
  export let label: string;
  export let items: any[];
  export let handleChange = () => {};
  let isOpen = false;
</script>

<div class="space-y-3 relative mt-6">
  <div
    class="capitalize text-xl font-semibold text-center pb-1 border-b border-slate-300 dark:border-slate-600"
  >
    {modelName}
  </div>
  <div class=" flex items-center justify-center space-x-3 text-base mx-auto">
    <div>{label}:</div>
    <div>
      <button
        on:click={() => {
          isOpen = !isOpen;
        }}
        class="flex items-center font-semibold space-x-2 bg-slate-200 active:bg-slate-300 dark:bg-slate-600 dark:active:bg-slate-500 !px-3 !py-1 rounded-md"
      >
        <div>{type}</div>
        <div class=" rotate-180">
          <ArrowUp />
        </div>
      </button>
    </div>
  </div>

  {#if isOpen}
    <div
      transition:fly={{ duration: 400, y: -50 }}
      use:clickOutside
      on:click_outside={() => {
        isOpen = !isOpen;
      }}
      class=" absolute top-full left-1/2 -translate-x-1/2 w-60 z-50"
    >
      <div
        class=" common-bg common-border font-semibold text-base max-h-60 overflow-y-auto"
      >
        {#each items as item}
          <!-- content here -->
          <button
            on:click={() => {
              $selectionvalue = item;
              handleChange();
              isOpen = !isOpen;
            }}
            class="px-3 py-1 w-full block text-left hover:bg-slate-900/30 rounded-md"
          >
            {item.name}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
