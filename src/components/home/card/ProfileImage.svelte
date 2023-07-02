<script lang="ts">
  import { onMount } from "svelte";
  import { CHATBOTS, type ModelType } from "../../../chat/consts";
  import type { ChatMessageModel } from "../../../chat/types";
  import Browser from "webextension-polyfill";
  import {
    isPlayingMusic,
    isSpeechRequestPending,
    isSpeeching,
    currentSpeechLoadingItemId,
    currentSpeechPlayingItemId,
    currentTabId,
    incomingSpeechItems,
    isVoiceOn,
  } from "../../../store";
  import LoadingSvg from "./LoadingSvg.svelte";
  import { getRandomMusic, muteNonActiveTabs } from "../../../store/function";

  const lofiProfile =
    "https://i.pinimg.com/280x280_RS/89/6b/b2/896bb20801b503fdc0c15dd69c6bbc0c.jpg";
  export let item: ChatMessageModel;
  let currentModel: ModelType = CHATBOTS[0];

  onMount(() => {
    currentModel = CHATBOTS.find((model) => model.id === item.author);
  });

  async function handleSpeech() {
    try {
      // start playing music if not
      if (!$isPlayingMusic) {
        $isPlayingMusic = true;
        const audio: HTMLAudioElement | null =
          document.querySelector("#bg-music");
        if (audio) {
          audio.src = getRandomMusic();
          audio.play();
        }
      }
      if (!$isVoiceOn) {
        isVoiceOn.set(true);
      }

      // send a request to background
      isSpeechRequestPending.set(true);
      currentSpeechLoadingItemId.set(item.id);

      const currentTab = await Browser.tabs.query({
        active: true,
        currentWindow: true,
      });
      currentTabId.set(currentTab[0].id);
      incomingSpeechItems.set([]);
      const message = {
        item: item,
        currentActiveTabId: currentTab[0].id,
        clientRequest: true,
      };
      await Browser.runtime.sendMessage(message);
      await muteNonActiveTabs();
    } catch (error) {
      console.log(error);
    }
  }
</script>

<button on:click={handleSpeech} class="block relative w-full">
  {#if item.author !== "user"}
    <img src={lofiProfile} alt="" class="img !rounded-full" />
    {#if currentModel}
      <div class=" absolute -bottom-1 -right-1 w-1/2 h-1/2">
        <img src={currentModel?.avatar} alt="" class="img" />
      </div>
    {/if}
  {:else}
    <div
      class="user bg-gray-300 dark:bg-gray-400 border-gray-400 dark:border-gray-500"
    >
      <i class="fa-solid fa-user" />
    </div>
  {/if}
  {#if $isSpeechRequestPending && $currentSpeechLoadingItemId === item.id}
    <div class=" absolute -bottom-1 -left-1 w-1/2 h-1/2 bg-white/70 rounded">
      <LoadingSvg />
    </div>
  {/if}
  {#if $isSpeeching && $currentSpeechPlayingItemId === item.id}
    <div class=" absolute top-0 left-0 water-drop w-full h-full rounded-full">
      {#if item.author !== "user"}
        <img src={lofiProfile} alt="" class="img !rounded-full" />
      {:else}
        <div
          class="user bg-blue-300 dark:bg-blue-400 border-blue-400 dark:border-blue-500"
        >
          <i class="fa-solid fa-user" />
        </div>
      {/if}
    </div>
  {/if}
</button>

<style lang="postcss" scoped>
  .img {
    @apply object-cover bg-center aspect-square rounded;
  }

  @keyframes waterDropAnimation {
    0% {
      opacity: 0%;
      transform: scale(1);
    }
    50% {
      background-color: #ff99f5; /* Intermediate color */
      opacity: 45%;
      transform: scale(1.2);
    }
    100% {
      opacity: 0%;
      transform: scale(1);
    }
  }

  .water-drop {
    animation: waterDropAnimation 3s ease-in-out infinite;
  }

  .user {
    @apply border text-base object-cover bg-center flex justify-center items-center w-full aspect-square rounded-full;
  }
</style>
