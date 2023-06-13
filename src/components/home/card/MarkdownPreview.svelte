<script lang="ts">
  import { marked, Renderer } from "marked";
  import hljs from "highlight.js";
  import "highlight.js/styles/github.css";
  import { onMount } from "svelte";

  export let markdown: string;

  const renderer = new Renderer();
  renderer.code = (code: string, lang: string) => {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    const highlightedCode = hljs.highlight(code, { language }).value;
    return `<pre class="code-pre"><code class="hljs ${language} code-bg">${highlightedCode}</code></pre>`;
  };

  function parseMarkdown(text: string): string {
    if (text.includes("reload-link")) {
      setTimeout(addReloadLinks, 500);
    }
    return marked(text.replaceAll("^", " "), {
      renderer,
      headerIds: false,
      mangle: false,
    }).replaceAll(`<a href=`, `<a target="_blank" href=`);
  }

  function addReloadLinks() {
    const reloadLinks = document.querySelectorAll("#reload-link");

    if (reloadLinks) {
      for (let index = 0; index < reloadLinks.length; index++) {
        const link = reloadLinks[index];
        link.addEventListener("click", function () {
          location.reload();
        });
      }
    }
  }

  onMount(() => {
    setTimeout(addReloadLinks, 500);
  });
</script>

<div
  class="w-full whitespace-pre-line grid grid-cols-1 gap-3 markdown-custom-styles overflow-x-scroll"
>
  {@html parseMarkdown(markdown)}
</div>
