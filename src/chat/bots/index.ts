import { BardBot } from "./bard";
import { BingWebBot } from "./bing";
import { ChatGPTBot, YoutubeBot } from "./chatgpt";

export type BotId = "chatgpt" | "bing" | "bard" | "youtube";

export function createBotInstance(botId: BotId) {
  switch (botId) {
    case "chatgpt":
      return new ChatGPTBot();
    case "bing":
      return new BingWebBot();
    case "bard":
      return new BardBot();
    case "youtube":
      return new YoutubeBot();
  }
}
