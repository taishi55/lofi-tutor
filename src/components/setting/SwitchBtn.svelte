<script lang="ts">
  import { scale } from "svelte/transition";

  export let handleAction = () => {};
  export let stitch = false;
  export let lable = "";
</script>

<div class="mt-6">
  <div
    class="capitalize text-xl font-semibold text-center pb-1 border-b border-slate-300 dark:border-slate-600"
  >
    {lable}
  </div>
  <div class="mt-2">
    <div class="flex justify-center">
      {#key stitch}
        <button
          in:scale
          on:click={handleAction}
          class="font-semibold bg-slate-200 dark:bg-slate-600 text-base !px-3 !py-1 rounded-md w-fit"
        >
          {#if stitch}
            <i class="fa-solid fa-square-check" />
          {:else}
            <i class="fa-regular fa-square-minus" />
          {/if}
        </button>
      {/key}
    </div>
  </div>
</div>
