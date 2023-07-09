<script lang="ts">
  import { searchQuery, messages } from "../../store";
  import Card from "./card/Card.svelte";
  import SearchInput from "./share/SearchInput.svelte";
  import LofiGpt from "./lofigpt/LofiGPT.svelte";
  import { flip } from "svelte/animate";
</script>

<div class="wrapper">
  <!-- bookmark results -->
  <div class="px-4 space-y-2">
    {#if $messages.length > 0}
      <SearchInput
        on:input={(e) => {
          searchQuery.set(e.detail);
        }}
      />
    {/if}
    <LofiGpt />
  </div>
  <div class="scroll-container" id="chat-results">
    {#each $messages
      .filter((message) => message.text
          .toLowerCase()
          .includes($searchQuery.toLowerCase()))
      .reverse() as item (item.id)}
      <div animate:flip>
        <Card {item} />
      </div>
    {/each}
  </div>
</div>

<style lang="postcss" scoped>
  .wrapper {
    @apply flex flex-col space-y-2 h-full overflow-y-auto text-sm;
  }
  .scroll-container {
    @apply flex flex-col-reverse scroll-smooth h-full overflow-y-auto pb-8;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>
