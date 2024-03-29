import { AbstractBot, type SendMessageParams } from "../abstract-bot";
import { ChatGPTWebBot, YoutubeWebBot } from "../chatgpt-webapp";

export class ChatGPTBot extends AbstractBot {
  #bot: ChatGPTWebBot;

  constructor() {
    super();
    this.#bot = new ChatGPTWebBot();
  }

  doSendMessage(params: SendMessageParams): Promise<void> {
    return this.#bot.doSendMessage(params);
  }

  async resetConversation() {
    return this.#bot.resetConversation();
  }
}

export class YoutubeBot extends AbstractBot {
  #bot: YoutubeWebBot;

  constructor() {
    super();
    this.#bot = new YoutubeWebBot();
  }

  doSendMessage(params: SendMessageParams): Promise<void> {
    return this.#bot.doSendMessage(params);
  }

  async resetConversation() {
    return this.#bot.resetConversation();
  }
}