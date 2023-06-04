<script lang="ts">
  import { onMount } from "svelte";
  import {
    templatePage,
    templatePages,
    templateItems,
    templateItem,
    emptyItem,
    searchQueryTemplates,
    currentLocale,
  } from "../../../store";
  import SearchInput from "../share/SearchInput.svelte";
  import TemplateItem from "./TemplateItem.svelte";
  import { v4 as uuidv4 } from "uuid";
  import { defaultTemplateItems } from "../../../store/instructions";
  import Browser from "webextension-polyfill";
  import { flip } from "svelte/animate";
  import { customLang } from "../../../store/lang";

  export let closeWindow = () => {};

  onMount(async () => {
    const result = await Browser.storage.local.get(["myInstructions"]);
    if (!result?.myInstructions) {
      $templateItems = defaultTemplateItems;
      await Browser.storage.local.set({ myInstructions: $templateItems });
    } else {
      $templateItems = result.myInstructions || [];
    }

    if ($templateItem?.id) {
      document.getElementById($templateItem.id)?.scrollIntoView();
    }
  });

  const createItem = () => {
    emptyItem.id = uuidv4();
    emptyItem.label = "";
    emptyItem.value = "";
    $templateItem = emptyItem;
    $templatePage = templatePages.add;
  };
</script>

<SearchInput on:input={(e) => searchQueryTemplates.set(String(e.detail))} />
<div class="overflow-y-auto h-80">
  <div class="pb-2" />
  {#each $templateItems.filter((item) => item.label
        .toLowerCase()
        .includes($searchQueryTemplates.toLowerCase()) || item.value
        .toLowerCase()
        .includes($searchQueryTemplates.toLowerCase())) as item (item.id)}
    <div animate:flip>
      <TemplateItem
        {item}
        {closeWindow}
        isItemHighlighted={$templateItem?.id === item.id}
      />
    </div>
  {/each}
</div>
<div>
  <button
    on:click={createItem}
    class=" bg-blue-600 w-full text-white rounded-md px-3 py-1"
    >{customLang[$currentLocale].system.addNew}
  </button>
</div>
