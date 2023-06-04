<script lang="ts">
  import { fly } from "svelte/transition";
  import {
    currentPage,
    menuToggle,
    currentLocale,
    pageRoutes,
  } from "../../store";
  import { clickOutside } from "../../store/function";
  import { customLang } from "../../store/lang";

  const toggleMenu = () => {
    $menuToggle = !$menuToggle;
  };

  const getPages = () => {
    return [
      {
        name: customLang[$currentLocale].system.menu.home,
        id: pageRoutes.home,
      },
      {
        name: customLang[$currentLocale].system.menu.readmap,
        id: pageRoutes.map,
      },
      {
        name: customLang[$currentLocale].system.menu.creator,
        id: pageRoutes.creator,
      },
      {
        name: customLang[$currentLocale].system.menu.community,
        id: pageRoutes.community,
      },
      {
        name: customLang[$currentLocale].system.menu.setting,
        id: pageRoutes.settings,
      },
    ];
  };

  let pages = getPages();

  $: if ($menuToggle) {
    pages = getPages();
  }
</script>

{#if $menuToggle}
  <div use:clickOutside on:click_outside={toggleMenu} class=" icon-wrapper">
    <button on:click={toggleMenu} class="common-text">
      <i class="fa-solid fa-bars" />
    </button>
    <div
      transition:fly={{ x: 3, duration: 400 }}
      class=" absolute top-full -translate-y-2 right-1 bg-white rounded-md text-sm w-48"
    >
      <div class="common-bg common-border">
        {#each pages as page}
          <button
            on:click={() => {
              $currentPage = page?.id;
              toggleMenu();
            }}
            class="px-3 py-1 w-full block text-left hover:bg-slate-900/30 rounded-md"
          >
            {page?.name}
          </button>
        {/each}
      </div>
    </div>
  </div>
{:else}
  <div class=" icon-wrapper">
    <button on:click={toggleMenu} class="common-text">
      <i class="fa-solid fa-bars" />
    </button>
  </div>
{/if}

<style lang="postcss" scoped>
  .icon-wrapper {
    @apply absolute top-1 right-3 text-base p-3 z-50;
  }
</style>
