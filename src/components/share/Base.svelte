<script>
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{ duration: 300 }}
  class="h-full overflow-y-auto m-4 message-bg px-4 pt-4 pb-20 rounded-md shadow-inner shadow-slate-300 dark:shadow-transparent"
>
  <slot />
</div>
