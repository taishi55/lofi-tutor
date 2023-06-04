import Browser from "webextension-polyfill";
import type { RequestInitSubset } from "../../types/messaging";

import {
  globalFetchRequester,
  proxyFetchRequester,
  type Requester,
} from "./requesters";

class ChatGPTClient {
  requester: Requester;

  constructor() {
    this.requester = globalFetchRequester;
    proxyFetchRequester.findExistingProxyTab().then((tab) => {
      if (tab) {
        this.switchRequester(proxyFetchRequester);
      }
    });
  }

  switchRequester(newRequester: Requester) {
    console.debug("client switchRequester", newRequester);
    this.requester = newRequester;
  }

  async fetch(url: string, options?: RequestInitSubset): Promise<Response> {
    return this.requester.fetch(url, options);
  }

  async getAccessToken(): Promise<string> {
    try {
      const resp = await this.fetch("https://chat.openai.com/api/auth/session");
      if (resp.status === 403) {
        await Browser.storage.sync.set({
          accessTokenChatGPT: "",
        });
        return "";
      }
      const data = await resp.json().catch(() => ({}));
      if (!data.accessToken) {
        await Browser.storage.sync.set({
          accessTokenChatGPT: "",
        });
        return "";
      }
      return data.accessToken;
    } catch (error) {
      return "";
    }
  }

  private async requestBackendAPIWithToken(
    token: string,
    method: string,
    path: string,
    data?: unknown
  ) {
    return this.fetch(`https://chat.openai.com/backend-api${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data === undefined ? undefined : JSON.stringify(data),
    });
  }

  async getModels(
    token: string
  ): Promise<
    { slug: string; title: string; description: string; max_tokens: number }[]
  > {
    const resp = await this.requestBackendAPIWithToken(
      token,
      "GET",
      "/models"
    ).then((r) => r.json());
    return resp.models;
  }

  // Switch to proxy mode, or refresh the proxy tab
  async fixAuthState() {
    if (this.requester === proxyFetchRequester) {
      await proxyFetchRequester.refreshProxyTab();
    } else {
      await proxyFetchRequester.getProxyTab();
      this.switchRequester(proxyFetchRequester);
    }
  }
}

export const chatGPTClient = new ChatGPTClient();
