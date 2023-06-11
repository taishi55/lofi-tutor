<script lang="ts">
  import Browser from "webextension-polyfill";
  import { isEmotional } from "../../../store";
  import { onMount } from "svelte";

  const toggle = async () => {
    $isEmotional = !$isEmotional;
    await Browser.storage.sync.set({ isEmotional: $isEmotional });
  };

  onMount(async () => {
    const result = await Browser.storage.sync.get("isEmotional");
    if (result?.isEmotional) {
      $isEmotional = true;
    } else {
      $isEmotional = false;
    }
  });
</script>

<button on:click={toggle} class="lofigpt-menu-icon">
  {#if $isEmotional}
    <i class="fa-regular fa-face-laugh" />
  {:else}
    <i class="fa-regular fa-face-meh" />
  {/if}
</button>
