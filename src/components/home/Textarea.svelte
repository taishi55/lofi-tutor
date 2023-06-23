<script lang="ts">
  import {
    messages,
    queryText,
    botModel,
    generatingMessageId,
    searchQuery,
    ConnectWith,
    isSpeeching,
    isGirlTalking,
    isSpeechRequestPending,
    isPlayingMusic,
    incomingSpeechItems,
    currentSpeechLoadingItemId,
    currentSpeechPlayingItemId,
    currentTabId,
  } from "../../store";
  import ArrowUp from "./share/ArrowUp.svelte";
  import Template from "./template/Template.svelte";
  // @ts-ignore
  import autosize from "svelte-autosize";
  import { onMount, tick } from "svelte";
  import Model from "./model/Model.svelte";
  import GenerationActionBtn from "./model/GenerationActionBtn.svelte";
  import { uuid } from "../../chat/utils";
  import { get } from "svelte/store";
  import Browser from "webextension-polyfill";
  import type { ChatMessageModel } from "../../chat/types";
  import { delayAsync } from "../../store/function";
  import { customLang } from "../../store/lang";
  import { currentLocale } from "../../store/";

  let showTemplate = false;
  let showModel = false;
  var voiceSwitch = false;
  var scrollSwitch = false;

  let closeWindow = () => {
    showTemplate = false;
    showModel = false;
  };
  let isGeneratingText = false;

  let getResponsePort: Browser.Runtime.Port = Browser.runtime.connect({
    name: ConnectWith.getResponse,
  });

  const sendMessage = async (event: KeyboardEvent) => {
    // If the Shift key or any key other than Enter is pressed, do nothing and return
    if (event.shiftKey || event.key !== "Enter" || !$queryText.trim()) {
      return;
    }
    isGeneratingText = true;
    $searchQuery = "";

    getResponsePort = Browser.runtime.connect({
      name: ConnectWith.getResponse,
    });

    const errSavedText = $queryText;

    try {
      const tempQueryText = get(queryText);
      queryText.set("");

      $generatingMessageId = uuid();

      const result = await Browser.storage.sync.get([
        "voiceSwitch",
        "scrollSwitch",
      ]);

      if (result?.voiceSwitch) {
        voiceSwitch = true;
      }

      if (result?.scrollSwitch) {
        scrollSwitch = true;
      }

      $messages.push(
        { id: uuid(), text: tempQueryText, author: "user", new: false },
        { id: $generatingMessageId, text: "", author: $botModel.id, new: false }
      );
      $messages = $messages;

      if (voiceSwitch) {
        const yourItem = $messages.at($messages.length - 2);
        await startSpeech(yourItem);
      }
      scrollToBottom();

      // Send a message to background.js
      getResponsePort.postMessage({
        type: ConnectWith.getResponse,
        queryText: tempQueryText,
        generatingMessageId: $generatingMessageId,
        botModel: $botModel,
        messages: $messages,
      });

      // Listen for messages from background.js
      getResponsePort.onMessage.addListener(async function (response) {
        if (response.message && $messages.length > 0) {
          $messages = $messages.map((m) => {
            if (m.id === response.message.id) {
              m.text = response.message.text;
            }
            return m;
          });
        }

        if (response.message && response.message === "done") {
          isGeneratingText = false;
          if (scrollSwitch && !voiceSwitch) {
            scrollToBottom();
          }

          await cleanUpMessages();

          if (voiceSwitch) {
            const lastItem = $messages.at($messages.length - 1);
            await startSpeech(lastItem);
          }
        }
      });

      await emptyTextarea();
    } catch (error) {
      isGeneratingText = false;
      $queryText = errSavedText;
      getResponsePort = Browser.runtime.connect({
        name: ConnectWith.getResponse,
      });
      if (
        error &&
        error?.message &&
        error.message.trim() === "Attempting to use a disconnected port object"
      ) {
        $messages.push({
          id: uuid(),
          text: customLang[$currentLocale].system.error.disconnection,
          author: $botModel.id,
          new: true,
        });
        $messages = $messages;
      }
      await cleanUpMessages();
    }
  };

  onMount(async () => {
    try {
      const result = await Browser.storage.local.get(["messages"]);
      if ((result as { messages?: ChatMessageModel[] }).messages) {
        $messages = result?.messages || [];
        scrollToBottom();
      }
    } catch (error) {}
  });

  const startSpeech = async (item: ChatMessageModel) => {
    try {
      if ($isPlayingMusic) {
        isSpeechRequestPending.set(true);

        const currentTab = await Browser.tabs.query({
          active: true,
          currentWindow: true,
        });
        currentTabId.set(currentTab[0].id);
        const message = {
          item: item,
          currentActiveTabId: currentTab[0].id,
          clientRequest: true,
        };
        await Browser.runtime.sendMessage(message);
      }
    } catch (error) {}
  };

  const cleanUpMessages = async () => {
    // removie duplicate ids
    const ids = $messages.map((m) => m.id);
    $messages = $messages.filter(
      (m, index) => !ids.includes(m.id, index + 1) && m.text.trim()
    );
    $messages = $messages.slice(-100);
    await Browser.storage.local.set({ messages: $messages });
  };

  Browser.runtime.onMessage.addListener(async function (
    request,
    sender,
    sendResponse
  ) {
    try {
      // Check if the message contains a command
      if (request?.command === "toggle-sidebar") {
        const result = await Browser.storage.local.get(["messages"]);
        if (result?.messages) {
          $messages = result?.messages || [];
          scrollToBottom();
        }

        $messages = $messages.filter((m) => m.text.trim());
      }
      if (
        request?.isTransmittedBackend &&
        request?.currentActiveTabId &&
        request?.item &&
        !$incomingSpeechItems.some(
          (item) =>
            item.audioUrl === request.audioUrl ||
            item.item.id === request.item.id ||
            item.currentActiveTabId !== $currentTabId
        )
      ) {
        if ($incomingSpeechItems.length === 0) {
          isPlayingAudio = false;
        }
        $currentSpeechLoadingItemId = "";
        $incomingSpeechItems.push({
          audioUrl: request.audioUrl,
          item: request.item,
          currentActiveTabId: request.currentActiveTabId,
        });
        $incomingSpeechItems = $incomingSpeechItems;
      }
    } catch (error) {
      // console.log(error, error.message, error.code);
    }
  });

  const setMusicVolume = (volume: number) => {
    const audio: HTMLAudioElement | null = document.querySelector("#bg-music");
    if (audio?.volume) {
      audio.volume = volume;
    }
  };

  let isPlayingAudio = false;
  let isIgnoreThisChange = false;
  $: if (
    $incomingSpeechItems.length > 0 &&
    !isPlayingAudio &&
    !isIgnoreThisChange
  ) {
    isPlayingAudio = true;
    try {
      triggerSpeechWhenReady();
    } catch (error) {
      console.log(error);
      isPlayingAudio = false;
    }
  }

  const triggerSpeechWhenReady = async () => {
    if (
      !$incomingSpeechItems.some((i) => i.currentActiveTabId === $currentTabId)
    )
      return;
    const voiceAudio: HTMLAudioElement | null =
      document.querySelector("#voice");
    const audioUrls = $incomingSpeechItems.map((i) => i.audioUrl);
    if (
      voiceAudio &&
      $incomingSpeechItems.length > 0 &&
      $incomingSpeechItems.at(0).audioUrl &&
      !$incomingSpeechItems.some((item, index) =>
        audioUrls.includes(item.audioUrl, index + 1)
      )
    ) {
      voiceAudio.src = $incomingSpeechItems[0].audioUrl;
      const isGirlVoiceItem = $incomingSpeechItems[0].item.author !== "user";
      const playPromise = voiceAudio.play();
      if (playPromise !== undefined) {
        playPromise.then((_) => {
          // start
          const audioReadyToPlay = async () => {
            currentSpeechPlayingItemId.set($incomingSpeechItems[0].item.id);
            if (scrollSwitch) {
              scrollToItem($incomingSpeechItems[0].item.id);
            }

            if (isGirlVoiceItem) {
              isGirlTalking.set(true);
            }
            isSpeeching.set(true);
            isSpeechRequestPending.set(false);
            setMusicVolume(0.25);
            voiceAudio.removeEventListener("canplaythrough", audioReadyToPlay);

            await delayAsync(300);
          };
          voiceAudio.addEventListener("canplaythrough", audioReadyToPlay);
          // end
          const audioReadyToEnd = async () => {
            currentSpeechPlayingItemId.set("");
            isSpeeching.set(false);
            isGirlTalking.set(false);
            setMusicVolume(1);
            voiceAudio.removeEventListener("ended", audioReadyToEnd);

            await delayAsync(2500);

            isIgnoreThisChange = true;
            $incomingSpeechItems.shift();
            $incomingSpeechItems = $incomingSpeechItems;
            isIgnoreThisChange = false;

            if ($incomingSpeechItems.length > 0) {
              await triggerSpeechWhenReady();
            } else {
              isPlayingAudio = false;
            }
          };
          voiceAudio.addEventListener("ended", audioReadyToEnd);
        });
      }
    } else {
      // remove duplicates
      isIgnoreThisChange = true;
      $incomingSpeechItems = $incomingSpeechItems.filter(
        (i, index) => !audioUrls.includes(i.audioUrl, index + 1)
      );
      isIgnoreThisChange = false;
    }
  };

  const scrollToBottom = () => {
    const container = document.querySelector("#chat-results");

    if (container) {
      // Scroll to the bottom of the container
      container.scrollTop = container.scrollHeight;
    }
  };

  const scrollToItem = (itemId: string) => {
    try {
      const itemMessage = document.querySelector(`#${itemId}`);

      if (itemMessage) {
        // Scroll to the bottom of the container
        itemMessage.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {}
  };

  const emptyTextarea = async () => {
    $queryText = "";
    await tick();
    const textarea = document.querySelector("#send-chat");
    if (textarea) {
      autosize.update(textarea);
    }
    setTimeout(() => {
      $queryText = "";
    }, 10);
  };
</script>

<div class="px-4">
  <div class=" flex justify-between items-center relative">
    <div class=" absolute top-0 left-1/2 -translate-x-1/2">
      {#if isGeneratingText}
        <GenerationActionBtn
          isStop={isGeneratingText}
          action={async () => {
            isGeneratingText = false;
            $incomingSpeechItems = [];
            getResponsePort.postMessage({
              type: ConnectWith.stopGenerating,
            });
            await cleanUpMessages();
          }}
        />
      {:else}
        <GenerationActionBtn
          isStop={isGeneratingText}
          action={async () => {
            $messages[$messages.length - 1].new = true;
            await cleanUpMessages();
            location.reload();
          }}
        />
      {/if}
    </div>
    <div class="relative">
      <button
        class="align-center common-text-hover"
        on:click={() => {
          showModel = !showModel;
        }}
      >
        <img src={$botModel?.avatar} class=" aspect-square h-3 w-3" alt="" />
        <div>{$botModel?.name}</div>
        <ArrowUp />
      </button>

      {#if showModel}
        <div class=" absolute bottom-0 left-0 pb-8">
          <Model {closeWindow} />
        </div>
      {/if}
    </div>
    <div class="relative">
      <button
        class="align-center common-text-hover"
        on:click={() => {
          showTemplate = !showTemplate;
        }}
      >
        <div>{customLang[$currentLocale].system.template}</div>
        <ArrowUp />
      </button>

      {#if showTemplate}
        <div class=" absolute bottom-0 right-0 z-50 pb-8">
          <Template {closeWindow} />
        </div>
      {/if}
    </div>
  </div>
  <div class=" relative transition-all duration-500 ease-in-out">
    <textarea
      placeholder={customLang[$currentLocale].system.askAbout}
      use:autosize
      class="input-textarea max-h-96 !py-2"
      bind:value={$queryText}
      on:keydown={sendMessage}
      id="send-chat"
      disabled={isGeneratingText}
    />
    {#if $queryText.length > 1}
      <div
        class=" absolute bottom-0 right-0 py-1 pl-1 pr-2 text-xs common-text-hover"
      >
        <button on:click={emptyTextarea}>
          <i class="fa-solid fa-xmark" />
        </button>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss" scoped>
  .align-center {
    @apply flex items-center space-x-1 py-2;
  }
</style>
