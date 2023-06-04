<script lang="ts">
  import { onMount } from "svelte";
  import Toggle from "./Toggle.svelte";
  import Browser from "webextension-polyfill";
  import { currentLocale, isDarkMode } from "../../store";
  import { customLang } from "../../store/lang";

  async function toggle() {
    document.documentElement.classList.toggle("dark");
    $isDarkMode = !$isDarkMode;
    await Browser.storage.sync.set({ darkMode: $isDarkMode });
  }

  onMount(async () => {
    const result = await Browser.storage.sync.get(["darkMode"]);
    if (result?.darkMode) {
      document.body.setAttribute("data-theme", "dark");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("dark");
      $isDarkMode = true;
      Browser.storage.sync.set({ darkMode: $isDarkMode });
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  });
</script>

<Toggle
  label={customLang[$currentLocale].system.dark}
  {toggle}
  isChecked={$isDarkMode}
  id="dark"
/>
