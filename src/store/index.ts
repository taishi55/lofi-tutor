import { writable } from "svelte/store";
import { CHATBOTS, type ModelType } from "../chat/consts";
import type { ChatMessageModel } from "../chat/types";
import type { LangCode } from "./langTypes";

export const menuToggle = writable(false);

export const searchQuery = writable("");
export const isGirlTalking = writable(false);
export const isPlayingMusic = writable(false);
export const isEmotional = writable(false);
export const isVoiceOn = writable(false);
export const isScrollOn = writable(false);
export const isSpeeching = writable(false);
export const isSpeechRequestPending = writable(false);
export const incomingSpeechItems = writable<
  { item: ChatMessageModel; audioUrl: string; currentActiveTabId: number }[]
>([]);
export const currentSpeechLoadingItemId = writable("");
export const currentSpeechPlayingItemId = writable("");
export const isDarkMode = writable(false);
export const copyCode = writable("");
export const copyTable = writable("");
export const copyHTML = writable("");

export const queryText = writable("");
export const botModel = writable<ModelType>(CHATBOTS[0]);
export const generatingMessageId = writable<undefined | string>(undefined);
export const messages = writable<ChatMessageModel[]>([]);

export const selectionvalue = writable<any>("");
export const currentLocale = writable<LangCode>("en-US");

export const currentTabId = writable(0.001);

// template prompt
export interface templateItemType {
  id: string;
  label: string;
  value: string;
}
export const emptyItem = {
  id: "",
  label: "",
  value: "",
};
export const templateItem = writable<templateItemType>();
export const templateItems = writable<templateItemType[]>([]);
export const searchQueryTemplates = writable("");
export const templatePages = {
  listing: 0,
  delete: 1,
  edit: 2,
  add: 3,
};
export const templatePage = writable(0);
export const isItemHighlighted = writable(false);

export const ConnectWith = {
  getResponse: "getResponse",
  resetConversation: "resetConversation",
  stopGenerating: "stopGenerating",
  getSpeechUrlFromRequest: "getSpeechUrlFromRequest",
  getSpeechUrlFromBackend: "getSpeechUrlFromBackend",
};

export const pageRoutes = {
  home: "/",
  map: "/road-map",
  creator: "/creator",
  community: "/community",
  settings: "/settings",
};

export const currentPage = writable(pageRoutes.home);

export const isYoutubeVideoId = writable("");
