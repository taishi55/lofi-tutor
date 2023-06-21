<script lang="ts">
  import { currentLocale, messages } from "../../../store";
  import { customLang } from "../../../store/lang";

  export let action = () => {};
  export let isStop = false;
</script>

{#if $messages.length > 0}
  <button on:click={action} class="align-center common-text-hover">
    {#if isStop}
      <div class="animate-spin">
        <i class="fa-solid fa-spinner animate-pulse" />
      </div>
      <div>{customLang[$currentLocale].system.stop}</div>
    {:else}
      <div class="">
        <i class="fa-regular fa-file" />
      </div>
      <div>{customLang[$currentLocale].system.newChat}</div>
    {/if}
  </button>
{/if}

<style lang="postcss" scoped>
  .align-center {
    @apply flex items-center space-x-1 py-2;
  }
</style>
