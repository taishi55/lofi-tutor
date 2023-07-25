import { v4 as uuidv4 } from "uuid";
import Browser from "webextension-polyfill";
import { customLang } from "../../../store/lang";
import { getCustomPrompt } from "../../consts";
import { ChatGPTWebModels, getUserConfig } from "../../services/user-config";
import { parseSSEResponse } from "../../utils/sse";
import { AbstractBot, type SendMessageParams } from "../abstract-bot";
import { chatGPTClient } from "./client";
import type { ResponseContent } from "./types";
import { getSearchResults, type VideoResult } from "./youtube";

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
    await Browser.storage.local.set({
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
      const result = await Browser.storage.local.get([
        "accessTokenChatGPT",
        "conversationContextChatGPT",
        "cachedModelNamesChatGPT",
      ]);
      if (!this.accessToken || result?.cachedModelNamesChatGPT) {
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

      let messages = [
        {
          id: uuidv4(),
          author: { role: "user" },
          content: {
            content_type: "text",
            parts: [userPrompt],
          },
        },
      ];

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
            messages: messages,
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
        let data: any;
        try {
          data = JSON.parse(message);
        } catch (err) {
          console.log("json parse failed", message);
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

      await Browser.storage.local.set({
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
    await Browser.storage.local.set({
      conversationContextChatGPT: undefined,
    });
  }
}

export class YoutubeWebBot extends AbstractBot {
  private accessToken?: string;
  private conversationContext?: ConversationContext;
  private cachedModelNames?: string[];
  private queryWords = "";
  private isGenerating?: boolean;
  private videoIds?: string;
  private youtubeExtract = "";
  private youtubePrompt = "";
  private isSpecificVideo = false;

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
    await Browser.storage.local.set({
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
      const result = await Browser.storage.local.get([
        "accessTokenChatGPT",
        "conversationContextChatGPT",
        "cachedModelNamesChatGPT",
        "youtubeQueryWords",
        "videoId",
      ]);
      const resultLang = await Browser.storage.sync.get("langOption");
      let defaultLang = "en-US";
      if (resultLang?.langOption) {
        defaultLang = resultLang.langOption;
      }
      if (!this.accessToken) {
        this.accessToken = await chatGPTClient.getAccessToken();
        if (!this.accessToken) {
          params.onEvent({
            type: "ERROR",
            data: {
              text: customLang[defaultLang].system.error.chatgpt.session,
            },
          });
          return;
        }
      }
      this.youtubeExtract = customLang[defaultLang].system.youtubeExtract;
      this.youtubePrompt = customLang[defaultLang].system.youtubePrompt;

      if (result?.conversationContextChatGPT) {
        this.conversationContext =
          result?.conversationContextChatGPT as ConversationContext;
      }

      if (result?.cachedModelNamesChatGPT) {
        this.cachedModelNames = result?.cachedModelNamesChatGPT as string[];
      }

      const modelName = await this.getModelName(params);
      console.debug("Using model:", modelName);

      let messages = [
        {
          id: uuidv4(),
          author: { role: "user" },
          content: {
            content_type: "text",
            parts: [`${this.youtubeExtract} ${params.prompt}`],
          },
        },
      ];
      this.isGenerating = false;
      this.videoIds = "";
      if (result?.youtubeQueryWords || result?.videoId) {
        this.isGenerating = true;
        await Browser.storage.local.set({
          youtubeQueryWords: "",
          videoId: "",
        });
        let results: VideoResult[];
        if (result?.videoId && !result.youtubeQueryWords) {
          this.isSpecificVideo = true;
          results = await getSearchResults(result.videoId, true);
        } else {
          this.isSpecificVideo = false;
          results = await getSearchResults(result.youtubeQueryWords);
        }
        this.queryWords = "";
        messages = [];
        for (let index = 0; index < results.length; index++) {
          const result = results[index];
          messages.push({
            id: uuidv4(),
            author: { role: "user" },
            content: {
              content_type: "text",
              parts: [
                `YouTube Video #${index + 1}\n\nTitle:${
                  result.title
                }\n\nTranscript: `,
              ],
            },
          });
          messages.push({
            id: uuidv4(),
            author: { role: "assistant" },
            content: {
              content_type: "text",
              parts: [result.transcript],
            },
          });
          if (!this.videoIds.includes(result.id)) {
            this.videoIds += `<iframe width="350px" height="auto" style="aspect-ratio: 16 / 9;display: inline-block;margin-right: 6px;margin-bottom: 6px;border-radius: 6px;" src="https://www.youtube.com/embed/${result.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`;
          }
        }
        messages.push({
          id: uuidv4(),
          author: { role: "user" },
          content: {
            content_type: "text",
            parts: [`${this.youtubePrompt} ${params.prompt}.`],
          },
        });
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
            messages: messages,
            model: modelName,
            conversation_id:
              this.conversationContext?.conversationId || undefined,
            parent_message_id:
              this.conversationContext?.lastMessageId || uuidv4(),
          }),
        }
      );

      await parseSSEResponse(resp, async (message) => {
        console.debug("chatgpt sse message", message);
        if (message === "[DONE]") {
          params.onEvent({ type: "DONE" });
          return;
        }
        let data: any;
        try {
          data = JSON.parse(message);
        } catch (err) {
          console.log("json parse failed", message);
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
          if (!this.isSpecificVideo) {
            this.queryWords = text;
          }
          params.onEvent({
            type: "UPDATE_ANSWER",
            data: {
              text: !this.isGenerating
                ? `\`Searching for\` ${text}`
                : `${text}\n\n<pre class="code-pre"><code class="hljs code-bg">${this.videoIds}</code></pre>`,
            },
          });
        }
      });

      if (result?.youtubeQueryWords) {
        await Browser.storage.local.set({
          conversationContextChatGPT: undefined,
          youtubeQueryWords: "",
          videoId: "",
        });
      } else {
        await Browser.storage.local.set({
          conversationContextChatGPT: undefined,
          youtubeQueryWords: this.queryWords,
          videoId: "",
        });
      }
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
      } else if (errString.includes("message_length_exceeds_limit")) {
        params.onEvent({
          type: "ERROR",
          data: {
            text: customLang[defaultLang].system.error.chatgpt.length,
          },
        });
      } else {
        console.log("chatgpt", error);
      }
    }
  }

  async resetConversation() {
    this.conversationContext = undefined;
    await Browser.storage.local.set({
      conversationContextChatGPT: undefined,
    });
  }
}
