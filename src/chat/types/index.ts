import type { BotId } from "../bots";
import type { BardBot } from "../bots/bard";
import type { BingWebBot } from "../bots/bing";
import type { ChatGPTBot } from "../bots/chatgpt";

export interface ChatMessageModel {
  id: string;
  author: BotId | "user";
  text: string;
  new: boolean;
}

export interface ConversationModel {
  messages: ChatMessageModel[];
}

export interface ChatState {
  botId: BotId;
  bot: ChatGPTBot | BingWebBot | BardBot;
  messages: ChatMessageModel[];
  generatingMessageId: string;
  abortController: AbortController;
  conversationId: string;
}
