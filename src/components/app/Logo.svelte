<script lang="ts">
  import { currentLocale } from "../../store";
  import { customLang } from "../../store/lang";
</script>

<div class="text-center px-4 pt-3">
  <div class=" flex items-center justify-center">
    <div class=" relative w-fit">
      <div
        class=" bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/80 dark:from-white/20 dark:via-slate-700/20 dark:to-white/40 absolute top-1/2 -translate-y-1/2 -left-10 rounded-md flex justify-center items-center w-8 h-8 text-white dark:text-white/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
      </div>
      <div class=" absolute bottom-1 -right-[3.7rem] text-xs">Lofi-Tutor</div>
      <div class=" font-semibold uppercase tracking-widest text-2xl">
        Phantom
      </div>
    </div>
  </div>
  <p class=" truncate text-sm pt-2">
    {customLang[$currentLocale].system.desc}
  </p>
</div>
