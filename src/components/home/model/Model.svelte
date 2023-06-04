<script>
  import { cubicInOut } from "svelte/easing";
  import { clickOutside } from "../../../store/function";
  import { fly } from "svelte/transition";
  import { CHATBOTS } from "../../../chat/consts";
  import ModelItem from "./ModelItem.svelte";
  export let closeWindow = () => {};
</script>

<div
  use:clickOutside
  transition:fly={{ duration: 200, y: 30, easing: cubicInOut }}
  on:click_outside={closeWindow}
  class="common-bg common-border w-80 px-3 py-2 text-sm space-y-1"
>
  {#each CHATBOTS as item, index}
    <ModelItem {closeWindow} {item} />
  {/each}
</div>
