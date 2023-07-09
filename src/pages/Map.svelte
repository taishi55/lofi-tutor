<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Base from "../components/share/Base.svelte";
  import { customLang } from "../store/lang";
  import { currentLocale } from "../store";

  let isMounted = false;
  onMount(() => {
    setTimeout(() => {
      isMounted = true;
    }, 400);
  });
</script>

{#if isMounted}
  <Base>
    <div
      in:fly={{ duration: 2000, y: -30 }}
      class="text-2xl font-semibold pb-1 border-b border-slate-300 dark:border-600 mb-3"
    >
      {customLang[$currentLocale].roadmap.article1.title}
    </div>
    <div in:fly={{ duration: 2000, y: -30 }} class="text-base mb-6">
      {customLang[$currentLocale].roadmap.article1.p1}
      <span class="highlight">
        {customLang[$currentLocale].roadmap.article1.p2}</span
      >
      {customLang[$currentLocale].roadmap.article1.p3}
      <span class="highlight">
        {customLang[$currentLocale].roadmap.article1.p4}</span
      >
      {customLang[$currentLocale].roadmap.article1.p5}
      <span class="highlight">
        {customLang[$currentLocale].roadmap.article1.p6}</span
      >
    </div>

    <div
      in:fly={{ duration: 2000, y: -30 }}
      class="text-2xl font-semibold pb-1 border-b border-slate-300 dark:border-600 mb-3"
    >
      {customLang[$currentLocale].roadmap.article2.title}
    </div>
    <div in:fly={{ duration: 2000, y: -30 }} class="text-base mb-6">
      {customLang[$currentLocale].roadmap.article2.desc}
    </div>

    {#each customLang[$currentLocale].roadmap.article2.missions as item, index}
      <div
        in:fly={{ duration: 2000, x: index % 2 ? -30 : 30 }}
        class={index % 2
          ? "ml-auto card dark:border-slate-600 sm:w-[28rem]"
          : "card dark:border-slate-600 sm:w-[28rem]"}
      >
        <div class="title dark:border-600">
          {index + 1}. {item.title}
        </div>
        <div>
          {item.desc}
        </div>
      </div>
    {/each}
  </Base>
{:else}
  <div class=" h-full" />
{/if}

<style lang="postcss" scoped>
  .title {
    @apply text-xl font-semibold pb-1 border-b border-slate-200 mb-2;
  }
  .card {
    @apply mb-8 border-2 border-slate-300 text-base p-3 rounded-md block w-[24rem] whitespace-pre-line;
  }
</style>
