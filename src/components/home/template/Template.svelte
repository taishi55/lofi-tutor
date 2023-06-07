<script lang="ts">
  import { cubicInOut } from "svelte/easing";
  import { clickOutside } from "../../../store/function";
  import { fly } from "svelte/transition";
  import TemplateList from "./TemplateList.svelte";
  import { templatePage, templatePages } from "../../../store";
  import TemplateSave from "./TemplateSave.svelte";
  import TemplateDelete from "./TemplateDelete.svelte";
  export let closeWindow = () => {};
  templatePage.set(templatePages.listing);
</script>

<div
  use:clickOutside
  transition:fly={{ duration: 200, y: 30, easing: cubicInOut }}
  on:click_outside={closeWindow}
  class="common-bg common-border w-80 px-3 py-2 text-sm common-shadow"
>
  {#if $templatePage === templatePages.listing}
    <TemplateList {closeWindow} />
  {:else if $templatePage === templatePages.delete}
    <TemplateDelete />
  {:else if $templatePage === templatePages.add}
    <TemplateSave />
  {:else if $templatePage === templatePages.edit}
    <TemplateSave />
  {/if}
</div>
