<script lang="ts">
  import { marked, Renderer } from "marked";
  import hljs from "highlight.js";
  import "highlight.js/styles/github.css";

  export let markdown: string;

  const renderer = new Renderer();
  renderer.code = (code: string, lang: string) => {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    const highlightedCode = hljs.highlight(code, { language }).value;
    return `<pre class="code-pre"><code class="hljs ${language} code-bg">${highlightedCode}</code></pre>`;
  };

  function parseMarkdown(text: string): string {
    return marked(text.replaceAll("^", " "), {
      renderer,
      headerIds: false,
      mangle: false,
    }).replaceAll(`<a href=`, `<a target="_blank" href=`);
  }
</script>

<div
  class="w-full whitespace-pre-line grid grid-cols-1 gap-3 markdown-custom-styles overflow-x-scroll"
>
  {@html parseMarkdown(markdown)}
</div>
