<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import Browser from "webextension-polyfill";
  import { sendMessageToActiveTab } from "../../store/function";
  import { customLang } from "../../store/lang";
  import { currentLocale } from "../../store";

  const percent = tweened(35);

  let isHalfScreen = false;
  const changeScreenSize = async () => {
    const message = {
      isHalfScreen: !isHalfScreen,
    };
    await sendMessageToActiveTab(message);
    isHalfScreen = !isHalfScreen;
    if (isHalfScreen) {
      percent.set(50);
    } else {
      percent.set(35);
    }
    await Browser.storage.sync.set({ isHalfScreen: isHalfScreen });
  };

  onMount(async () => {
    const result = await Browser.storage.sync.get(["isHalfScreen"]);
    if (result?.isHalfScreen) {
      isHalfScreen = false;
      await changeScreenSize();
    }
  });
</script>

<div class=" flex items-center space-x-1">
  <div>{customLang[$currentLocale].system.view}:</div>
  <div class=" w-7">
    <b class="opacity-70"> {$percent.toFixed(0)}%</b>
  </div>
  <div>
    <button on:click={changeScreenSize}>
      {#if isHalfScreen}
        <i class="fa-regular fa-circle-down" />
      {:else}
        <i class="fa-regular fa-circle-up" />
      {/if}
    </button>
  </div>
</div>

<style lang="postcss" scoped>
  i {
    @apply opacity-70;
  }
</style>
