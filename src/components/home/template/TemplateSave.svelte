<script lang="ts">
  import {
    templateItem,
    templateItems,
    templatePage,
    templatePages,
  } from "../../../store";

  import Browser from "webextension-polyfill";
  import { customLang } from "../../../store/lang";
  import { currentLocale } from "../../../store/";

  const saveItem = async () => {
    if (
      $templateItem.label.trim().length < 3 &&
      $templateItem.value.trim().length < 3
    ) {
      return;
    }

    let isNew = true;
    $templateItems = $templateItems.map((item) => {
      if (item.id === $templateItem.id) {
        isNew = false;
        return $templateItem;
      } else {
        return item;
      }
    });

    if (isNew) {
      $templateItems = [$templateItem, ...$templateItems];
    }

    await Browser.storage.local.set({ myInstructions: $templateItems });
    $templatePage = templatePages.listing;
  };
</script>

<div>
  <input
    type="text"
    class="input-textarea"
    placeholder={customLang[$currentLocale].system.writeTitle}
    bind:value={$templateItem.label}
    required
    minlength="3"
  />
</div>

<div class="h-72 py-2">
  <textarea
    name=""
    id=""
    placeholder={customLang[$currentLocale].system.writePrompt}
    class="input-textarea h-full"
    bind:value={$templateItem.value}
    required
    minlength="3"
  />
</div>

<div class="flex items-center space-x-2">
  <button
    on:click={saveItem}
    class=" bg-blue-600 hover:bg-blue-500 w-full text-white rounded-md px-3 py-1"
    >{customLang[$currentLocale].system.save}</button
  >
  <button
    on:click={() => {
      $templatePage = templatePages.listing;
    }}
    class=" bg-slate-600 hover:bg-slate-500 w-full text-white rounded-md px-3 py-1"
    >{customLang[$currentLocale].system.cancel}</button
  >
</div>
