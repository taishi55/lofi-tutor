<script lang="ts">
  import { sendMessageToActiveTab } from "../../store/function";

  const closeSlider = async () => {
    const messages = { command: "toggle-sidebar" };
    await sendMessageToActiveTab(messages);
  };
</script>

<div class=" absolute top-1 left-1 text-lg common-text">
  <button on:click={closeSlider} class="p-3">
    <i class="fa-solid fa-xmark" />
  </button>
</div>
