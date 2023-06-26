import { ofetch } from "ofetch";
import Browser from "webextension-polyfill";
// import { getCustomPrompt } from "../../consts";
import { AbstractBot, type SendMessageParams } from "../abstract-bot";
import { fetchRequestParams, parseBartResponse } from "./api";

function generateReqId() {
  return Math.floor(Math.random() * 900000) + 100000;
}

interface ConversationContext {
  requestParams: Awaited<ReturnType<typeof fetchRequestParams>>;
  contextIds: [string, string, string];
}

export class BardBot extends AbstractBot {
  private conversationContext?: ConversationContext;

  async doSendMessage(params: SendMessageParams) {
    if (!this.conversationContext) {
      this.conversationContext = {
        requestParams: await fetchRequestParams(),
        contextIds: ["", "", ""],
      };
      await Browser.storage.sync.set({
        conversationContextBard: this.conversationContext,
      });
    }

    let userPrompt = params.prompt;

    const { requestParams, contextIds } = this.conversationContext;
    const resp = await ofetch(
      "https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate",
      {
        method: "POST",
        signal: params.signal,
        query: {
          bl: requestParams.blValue,
          _reqid: generateReqId(),
          rt: "c",
        },
        body: new URLSearchParams({
          at: requestParams.atValue!,
          "f.req": JSON.stringify([
            null,
            `[[${JSON.stringify(userPrompt)}],null,${JSON.stringify(
              contextIds
            )}]`,
          ]),
        }),
        parseResponse: (txt) => txt,
      }
    );
    const ids = await parseBartResponse(resp, params);
    if (ids) {
      this.conversationContext.contextIds = ids;
    }
  }

  async resetConversation() {
    this.conversationContext = undefined;
    await Browser.storage.sync.set({
      conversationContextBard: this.conversationContext,
    });
  }
}
