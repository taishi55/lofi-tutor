import { random } from "lodash-es";
import { ofetch } from "ofetch";
import Browser from "webextension-polyfill";
import { customLang } from "../../../store/lang";
import { uuid } from "../../utils";
import type { SendMessageParams } from "../abstract-bot";
import type { ConversationResponse } from "./types";

// https://github.com/acheong08/EdgeGPT/blob/master/src/EdgeGPT.py#L32
function randomIP() {
  return `13.${random(104, 107)}.${random(0, 255)}.${random(0, 255)}`;
}

const API_ENDPOINT = "https://www.bing.com/turing/conversation/create";

export async function createConversation(
  params: SendMessageParams
): Promise<ConversationResponse> {
  const headers = {
    "x-ms-client-request-id": uuid(),
    "x-ms-useragent":
      "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.10.0 OS/Win32",
  };

  let resp: ConversationResponse;
  try {
    resp = await ofetch(API_ENDPOINT, { headers, redirect: "error" });
    if (!resp.result) {
      const resultLang = await Browser.storage.sync.get("langOption");
      let defaultLang = "en-US";
      if (resultLang?.langOption) {
        defaultLang = resultLang.langOption;
      }
      params.onEvent({
        type: "ERROR",
        data: { text: customLang[defaultLang].system.error.bing.session },
      });
      return;
    }
  } catch (err) {
    resp = await ofetch(API_ENDPOINT, {
      headers: { ...headers, "x-forwarded-for": randomIP() },
      redirect: "error",
    });
    if (!resp) {
      const resultLang = await Browser.storage.sync.get("langOption");
      let defaultLang = "en-US";
      if (resultLang?.langOption) {
        defaultLang = resultLang.langOption;
      }
      params.onEvent({
        type: "ERROR",
        data: { text: customLang[defaultLang].system.error.bing.session },
      });
      return;
    }
  }

  if (resp.result.value !== "Success") {
    const message = `${resp.result.value}: ${resp.result.message}`;

    const resultLang = await Browser.storage.sync.get("langOption");
    let defaultLang = "en-US";
    if (resultLang?.langOption) {
      defaultLang = resultLang.langOption;
    }
    params.onEvent({
      type: "ERROR",
      data: {
        text:
          "Uh-oh! 😟 " +
          message +
          "<br><br>" +
          customLang[defaultLang].system.error.bing.session,
      },
    });
    return;
  }
  return resp;
}
