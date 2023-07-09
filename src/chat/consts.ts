import { customLang } from "../store/lang";
import type { BotId } from "./bots";

export interface ModelType {
  id: BotId;
  name: string;
  avatar: string;
}

export const CHATBOTS: ModelType[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    avatar: "./images/chatgpt-logo.svg",
  },
  {
    id: "bing",
    name: "Bing",
    avatar: "./images/bing-logo.svg",
  },
  {
    id: "bard",
    name: "Bard",
    avatar: "./images/bard-logo.svg",
  },
  {
    id: "youtube",
    name: "YouTube",
    avatar: "./images/youtube-logo.svg",
  },
];

export const CHATGPT_HOME_URL = "https://chat.openai.com";

export const CHATGPT_API_MODELS = ["gpt-3.5-turbo", "gpt-4", "gpt-4-32k"];

export const ALL_IN_ONE_PAGE_ID = "all";

export const getCustomPrompt = (userComment: string, lang: string) => {
  return customLang[lang].system.customPrompt.replace(
    "[USERCOMMENT]",
    userComment
  );
};
