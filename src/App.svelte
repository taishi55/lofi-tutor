<script lang="ts">
  import Logo from "./components/app/Logo.svelte";
  import BorderLine from "./components/app/BorderLine.svelte";
  import CloseIcon from "./components/app/CloseIcon.svelte";
  import Info from "./components/app/Info.svelte";
  import MenuWindow from "./components/app/MenuWindow.svelte";
  import Home from "./pages/Home.svelte";
  import { currentPage, pageRoutes } from "./store";
  import Setting from "./pages/Setting.svelte";
  import Map from "./pages/Map.svelte";
  import Creator from "./pages/Creator.svelte";
  import Community from "./pages/Community.svelte";
  import "./tailwind.css";
</script>

<div class="sidebar common-bg">
  <CloseIcon />
  <MenuWindow />
  <BorderLine />
  <div class="wrapper">
    <Logo />
    {#if $currentPage === pageRoutes.home}
      <Home />
    {:else if $currentPage === pageRoutes.map}
      <Map />
    {:else if $currentPage === pageRoutes.creator}
      <Creator />
    {:else if $currentPage === pageRoutes.community}
      <Community />
    {:else if $currentPage === pageRoutes.settings}
      <Setting />
    {:else if $currentPage === pageRoutes.map}
      <Map />
    {:else}
      <Home />
    {/if}
    <Info />
  </div>
</div>

<style lang="postcss" scoped>
  .sidebar {
    @apply h-screen min-h-screen max-h-screen w-full flex relative;
  }

  .wrapper {
    @apply flex-1 font-sans flex flex-col space-y-3 h-full overflow-x-auto;
  }

  *::-webkit-scrollbar {
    display: none;
  }
</style>
