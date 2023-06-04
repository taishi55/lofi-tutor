<script lang="ts">
  export let toggle = () => {};
  export let isChecked = false;
  export let label = "";
  export let id = "";
  export let isLoading = false;
  export let disabled = false;
</script>

<div class="flex items-center">
  <span class="mr-[0.1rem]">{label}:</span>
  <div class="relative">
    {#if isLoading}
      <div
        class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse text-white"
      >
        <i class="fa-solid fa-spinner animate-spin" />
      </div>
    {/if}
    <input
      {id}
      class="toggle-checkbox hidden"
      type="checkbox"
      on:change={toggle}
      bind:checked={isChecked}
      disabled={isLoading || disabled}
    />
    <label for={id} class="toggle-label flex items-center cursor-pointer">
      <span
        class="toggle-inner bg-white w-8 h-4 rounded-full shadow-inner shadow-slate-600"
      />
      <span
        class="toggle-switch absolute left-0 top-1/2 -translate-y-1/2 ml-1.5 bg-slate-400 w-[0.6rem] h-[0.6rem] rounded-full shadow"
      />
    </label>
  </div>
</div>

<style lang="postcss" scoped>
  .toggle-checkbox:checked + .toggle-label .toggle-switch {
    @apply bg-slate-600 translate-x-full shadow-sm shadow-slate-600;
  }
  .toggle-inner {
    @apply bg-slate-400;
  }
  .toggle-switch {
    @apply transition-transform duration-200 ease-in-out bg-white shadow-sm shadow-slate-600;
  }
</style>
