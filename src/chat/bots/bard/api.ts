import { ofetch } from "ofetch";
import Browser from "webextension-polyfill";
import { customLang } from "../../../store/lang";
import type { SendMessageParams } from "../abstract-bot";

function extractFromHTML(variableName: string, html: string) {
  const regex = new RegExp(`"${variableName}":"([^"]+)"`);
  const match = regex.exec(html);
  return match?.[1];
}

export async function fetchRequestParams() {
  const html = await ofetch("https://bard.google.com/faq");
  const atValue = extractFromHTML("SNlM0e", html);
  const blValue = extractFromHTML("cfb2h", html);
  return { atValue, blValue };
}

export async function parseBartResponse(
  resp: string,
  params: SendMessageParams
) {
  const data = JSON.parse(resp.split("\n")[3]);
  const payload = JSON.parse(data[0][2]);
  if (!payload) {
    const resultLang = await Browser.storage.sync.get("langOption");
    let defaultLang = "en-US";
    if (resultLang?.langOption) {
      defaultLang = resultLang.langOption;
    }
    params.onEvent({
      type: "ERROR",
      data: { text: customLang[defaultLang].system.error.bard.session },
    });
    return;
  } else {
    console.debug("bard response payload", payload);
    const text = payload[0][0];
    params.onEvent({
      type: "UPDATE_ANSWER",
      data: { text },
    });
    params.onEvent({ type: "DONE" });

    return [...payload[1], payload[4][0][0]] as [string, string, string];
  }
}
