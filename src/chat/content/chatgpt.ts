import Browser from "webextension-polyfill";
import { setupProxyExecutor } from "../services/proxy-fetch";

function injectTip() {
  const div = document.createElement("div");
  div.style.position = "fixed";
  // put the div at right top of page
  div.style.top = "0";
  div.style.right = "0";
  document.body.appendChild(div);
}

async function main() {
  Browser.runtime.onMessage.addListener(async (message) => {
    if (message === "url") {
      return location.href;
    }
  });
  if ((window as any).__NEXT_DATA__) {
    await Browser.runtime.sendMessage({ event: "PROXY_TAB_READY" });
    injectTip();
  }
}

try {
  setupProxyExecutor();
  main().catch();
} catch (error) {}
