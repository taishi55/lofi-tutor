<script lang="ts">
  import Toggle from "./Toggle.svelte";
  import Browser from "webextension-polyfill";
  import { currentLocale, isDarkMode } from "../../store";
  import { customLang } from "../../store/lang";

  async function toggle() {
    document.documentElement.classList.toggle("dark");
    $isDarkMode = !$isDarkMode;
    await Browser.storage.sync.set({ darkMode: $isDarkMode });
  }
</script>

<Toggle
  label={customLang[$currentLocale].system.dark}
  {toggle}
  isChecked={$isDarkMode}
  id="dark"
/>
