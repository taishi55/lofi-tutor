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
  <div
    use:clickOutside
    on:click_outside={toggleMenu}
    class="icon-wrapper common-text"
  >
    <button on:click={toggleMenu} class="common-menu-icon">
      <i class="fa-solid fa-bars" />
    </button>
    <div
      transition:fly={{ x: 3, duration: 400 }}
      class=" absolute top-full -translate-y-2 right-1 common-bg common-border rounded-md text-sm w-48 px-2 py-1 common-shadow"
    >
      {#each pages as page}
        <button
          on:click={() => {
            $currentPage = page?.id;
            toggleMenu();
          }}
          class={$currentPage === page?.id
            ? "page-btn bg-blue-400/20"
            : "page-btn hover:bg-slate-900/30"}
        >
          {page?.name}
        </button>
      {/each}
    </div>
  </div>
{:else}
  <div class=" icon-wrapper common-text">
    <button on:click={toggleMenu} class="common-menu-icon">
      <i class="fa-solid fa-bars" />
    </button>
  </div>
{/if}

<style lang="postcss" scoped>
  .icon-wrapper {
    @apply absolute top-4 right-4 text-base z-50;
  }

  .page-btn {
    @apply px-3 py-1 w-full block text-left rounded-md;
  }
</style>
