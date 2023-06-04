export type Event =
  | {
      type: "UPDATE_ANSWER";
      data: {
        text: string;
      };
    }
  | {
      type: "DONE";
    }
  | {
      type: "ERROR";
      data: {
        text: string;
      };
    };

export interface SendMessageParams {
  prompt: string;
  onEvent: (event: Event) => void;
  signal?: AbortSignal;
}

export abstract class AbstractBot {
  async sendMessage(params: SendMessageParams) {
    try {
      await this.doSendMessage(params);
    } catch (err) {
      console.log(err);
    }
  }

  abstract doSendMessage(params: SendMessageParams): Promise<void>;
  abstract resetConversation(): void;
}
