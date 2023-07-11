<script lang="ts">
  import { isMac } from "../../store/function";

  export let title = "";
  export let key1 = "";
  export let key2 = "";
</script>

<div class=" block">
  <div class="command">
    <div>{title}:</div>
    <div class="key bg-slate-900/20 dark:bg-slate-200/20">
      {#if isMac()}
        ⌘
      {:else}
        {key1}
      {/if}
    </div>
    <div>+</div>
    <div>Shift</div>
    <div>+</div>
    <div class="pl-1">{key2}</div>
  </div>
</div>

<style lang="postcss" scoped>
  .key {
    @apply rounded px-1;
  }

  .command {
    @apply flex flex-nowrap items-stretch;
  }

  .block {
    @apply inline-block pr-3;
  }
</style>
