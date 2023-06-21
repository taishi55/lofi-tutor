import { v4 as uuidv4 } from "uuid";
import Browser from "webextension-polyfill";
import { customLang } from "../../../store/lang";
import { getCustomPrompt } from "../../consts";
import { ChatGPTWebModels, getUserConfig } from "../../services/user-config";
import { parseSSEResponse } from "../../utils/sse";
import { AbstractBot, type SendMessageParams } from "../abstract-bot";
import { chatGPTClient } from "./client";
import type { ResponseContent } from "./types";

function removeCitations(text: string) {
  return text.replace(/\u3010\d+\u2020source\u3011/g, "");
}

interface ConversationContext {
  conversationId: string;
  lastMessageId: string;
}

export class ChatGPTWebBot extends AbstractBot {
  private accessToken?: string;
  private conversationContext?: ConversationContext;
  private cachedModelNames?: string[];

  constructor() {
    super();
  }

  private async fetchModelNames(): Promise<string[]> {
    if (this.cachedModelNames) {
      return this.cachedModelNames;
    }
    const resp = await chatGPTClient.getModels(this.accessToken!);
    this.cachedModelNames = resp
      .map((r) => r.slug)
      .filter((slug) => !slug.includes("plugins"));
    await Browser.storage.sync.set({
      cachedModelNamesChatGPT: this.cachedModelNames,
    });
    return this.cachedModelNames;
  }

  private async getModelName(params: SendMessageParams): Promise<string> {
    const { chatgptWebappModelName } = await getUserConfig();
    if (chatgptWebappModelName === ChatGPTWebModels["GPT-4"]) {
      return "gpt-4";
    }
    if (chatgptWebappModelName === ChatGPTWebModels["GPT-4 Browsing"]) {
      return "gpt-4-browsing";
    }
    if (chatgptWebappModelName === ChatGPTWebModels["GPT-3.5 (Mobile)"]) {
      return "text-davinci-002-render-sha-mobile";
    }
    if (chatgptWebappModelName === ChatGPTWebModels["GPT-4 (Mobile)"]) {
      return "gpt-4-mobile";
    }
    return "text-davinci-002-render-sha";
  }

  async doSendMessage(params: SendMessageParams) {
    try {
      const result = await Browser.storage.sync.get([
        "accessTokenChatGPT",
        "conversationContextChatGPT",
        "cachedModelNamesChatGPT",
      ]);
      if (!this.accessToken) {
        this.accessToken = await chatGPTClient.getAccessToken();
        if (!this.accessToken) {
          const resultLang = await Browser.storage.sync.get("langOption");
          let defaultLang = "en-US";
          if (resultLang?.langOption) {
            defaultLang = resultLang.langOption;
          }
          params.onEvent({
            type: "ERROR",
            data: {
              text: customLang[defaultLang].system.error.chatgpt.session,
            },
          });
          return;
        }
      }

      if (result?.conversationContextChatGPT) {
        this.conversationContext =
          result?.conversationContextChatGPT as ConversationContext;
      }

      if (result?.cachedModelNamesChatGPT) {
        this.cachedModelNames = result?.cachedModelNamesChatGPT as string[];
      }

      const modelName = await this.getModelName(params);
      console.debug("Using model:", modelName);

      // check if custom prompt selected
      const settingResult = await Browser.storage.sync.get([
        "isEmotional",
        "langOption",
      ]);
      let userPrompt = params.prompt;
      if (settingResult?.isEmotional && settingResult?.langOption) {
        userPrompt = getCustomPrompt(params.prompt, settingResult.langOption);
      }

      const resp = await chatGPTClient.fetch(
        "https://chat.openai.com/backend-api/conversation",
        {
          method: "POST",
          signal: params.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.accessToken}`,
          },
          body: JSON.stringify({
            action: "next",
            messages: [
              {
                id: uuidv4(),
                author: { role: "user" },
                content: {
                  content_type: "text",
                  parts: [userPrompt],
                },
              },
            ],
            model: modelName,
            conversation_id:
              this.conversationContext?.conversationId || undefined,
            parent_message_id:
              this.conversationContext?.lastMessageId || uuidv4(),
          }),
        }
      );

      await parseSSEResponse(resp, (message) => {
        console.debug("chatgpt sse message", message);
        if (message === "[DONE]") {
          params.onEvent({ type: "DONE" });
          return;
        }
        let data;
        try {
          data = JSON.parse(message);
        } catch (err) {
          console.log(message);
          params.onEvent({
            type: "DONE",
          });
          return;
        }
        const content = data.message?.content as ResponseContent | undefined;
        if (!content) {
          return;
        }
        let text: string;
        if (content.content_type === "text") {
          text = content.parts[0];
          text = removeCitations(text);
        } else if (content.content_type === "code") {
          text = "_" + content.text + "_";
        } else {
          return;
        }
        if (text) {
          this.conversationContext = {
            conversationId: data.conversation_id,
            lastMessageId: data.message.id,
          };
          params.onEvent({
            type: "UPDATE_ANSWER",
            data: { text },
          });
        }
      });

      await Browser.storage.sync.set({
        conversationContextChatGPT: this.conversationContext,
      });
    } catch (error) {
      const errString = String(error);

      const resultLang = await Browser.storage.sync.get("langOption");
      let defaultLang = "en-US";
      if (resultLang?.langOption) {
        defaultLang = resultLang.langOption;
      }
      if (errString.includes("token_expired")) {
        params.onEvent({
          type: "ERROR",
          data: {
            text: customLang[defaultLang].system.error.chatgpt.session,
          },
        });
      } else {
        console.log("chatgpt", error);
      }
    }
  }

  async resetConversation() {
    this.conversationContext = undefined;
    await Browser.storage.sync.set({
      conversationContextChatGPT: this.conversationContext,
    });
  }
}
