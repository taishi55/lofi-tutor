<script lang="ts">
  import {
    currentLocale,
    templateItem,
    templateItems,
    templatePage,
    templatePages,
  } from "../../../store";
  import Browser from "webextension-polyfill";
  import { customLang } from "../../../store/lang";

  const deleteItem = async () => {
    $templateItems = $templateItems.filter(
      (item) => item.id !== $templateItem.id
    );
    await Browser.storage.local.set({ myInstructions: $templateItems });
    $templatePage = templatePages.listing;
  };
</script>

<div>
  <input
    type="text"
    class="input-textarea"
    placeholder=""
    bind:value={$templateItem.label}
    disabled
  />
</div>

<div class="h-80 py-2">
  <textarea
    name=""
    id=""
    class="input-textarea h-full"
    bind:value={$templateItem.value}
    disabled
  />
</div>

<div class="flex items-center space-x-2">
  <button
    on:click={deleteItem}
    class=" bg-red-600 hover:bg-red-500 w-full text-white rounded-md px-3 py-1"
    >{customLang[$currentLocale].system.delete}
  </button>
  <button
    on:click={() => {
      $templatePage = templatePages.listing;
    }}
    class=" bg-slate-600 hover:bg-slate-500 w-full text-white rounded-md px-3 py-1"
    >{customLang[$currentLocale].system.cancel}</button
  >
</div>
