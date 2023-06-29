<script lang="ts">
  import { sendMessageToActiveTab } from "../../store/function";

  const closeSlider = async () => {
    const messages = { command: "toggle-sidebar" };
    await sendMessageToActiveTab(messages);
  };
</script>

<div class=" absolute top-4 left-6 text-lg common-text">
  <button on:click={closeSlider} class="common-menu-icon">
    <i class="fa-solid fa-xmark" />
  </button>
</div>
