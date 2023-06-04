<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { customLang } from "../../../store/lang";
  import { currentLocale } from "../../../store";
  const dispatch = createEventDispatcher();
  let textSearch = "";
  function handleChange(event: Event) {
    dispatch("input", (event.target as HTMLInputElement).value || "");
  }

  function deleteText() {
    textSearch = "";
    dispatch("input", "");
  }
</script>

<div class="relative">
  <div class="icon-position text-slate-400 left-2 dark:text-white/60">
    <i class="fas fa-search" />
  </div>

  <input
    bind:value={textSearch}
    on:input={handleChange}
    type="text"
    class="!pl-[1.8rem] input-textarea"
    placeholder={customLang[$currentLocale].system.search}
  />

  {#if textSearch}
    <div class="icon-position text-slate-400 right-2 dark:text-white/60">
      <button on:click={deleteText}>
        <i class="fa-solid fa-xmark" />
      </button>
    </div>
  {/if}
</div>

<style lang="postcss" scoped>
  .icon-position {
    @apply absolute top-1/2 -translate-y-1/2;
  }
</style>
