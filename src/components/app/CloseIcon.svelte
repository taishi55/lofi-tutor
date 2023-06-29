<script lang="ts">
  import { sendMessageToActiveTab } from "../../store/function";

  const closeSlider = async () => {
    const messages = { command: "toggle-sidebar" };
    await sendMessageToActiveTab(messages);
  };
</script>

<div class=" absolute top-4 left-4 text-lg common-text">
  <button
    on:click={closeSlider}
    class="bg-slate-900/20 dark:bg-slate-500 rounded w-7 h-7 flex justify-center items-center"
  >
    <i class="fa-solid fa-xmark" />
  </button>
</div>
