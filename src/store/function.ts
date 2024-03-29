import Browser from "webextension-polyfill";
import { currentTabId } from ".";

/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement | null): any {
  const handleClick = (event: MouseEvent) => {
    if (
      node &&
      !node.contains(event.target as Node) &&
      !event.defaultPrevented
    ) {
      node.dispatchEvent(new CustomEvent("click_outside", { detail: node }));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}

export function isMac(): boolean {
  return window.navigator.userAgent.indexOf("Mac") !== -1;
}

export async function sendMessageToActiveTab(messages: Object) {
  try {
    let tabs = await Browser.tabs.query({ active: true, currentWindow: true });

    if (tabs.length === 0) {
      throw new Error("No active tabs found");
    }

    let response = await Browser.tabs.sendMessage(tabs[0].id, messages);

    return response;
  } catch (error) {
    console.log("error background", error);
  }
}

export const getRandomMusic = () => {
  const musicList = [
    "https://stream.mubert.com/b2b/v2?playlist=6.4.3&intensity=medium&pat=bXViZXJ0Zm9yc3RyZWFtZXJzLjE4NjgxNzM5LjAzZTgxNTg5NzJmMWMzM2IxM2Y2ZDVlOWQ2ZWI3MTdkYTNkOTM3NTcuMS4z.08deb4725ee7f6ef03af2e32710389590d00a48e6d3380897b448242675b72d9",
    "https://stream.mubert.com/b2b/v2?playlist=6.4.0&intensity=medium&pat=bXViZXJ0Zm9yc3RyZWFtZXJzLjE4NjgxNzM5LjAzZTgxNTg5NzJmMWMzM2IxM2Y2ZDVlOWQ2ZWI3MTdkYTNkOTM3NTcuMS4z.08deb4725ee7f6ef03af2e32710389590d00a48e6d3380897b448242675b72d9",
    "https://stream.mubert.com/b2b/v2?playlist=6.3&intensity=medium&pat=bXViZXJ0Zm9yc3RyZWFtZXJzLjE4NjgxNzM5LjAzZTgxNTg5NzJmMWMzM2IxM2Y2ZDVlOWQ2ZWI3MTdkYTNkOTM3NTcuMS4z.08deb4725ee7f6ef03af2e32710389590d00a48e6d3380897b448242675b72d9",
    "https://stream.mubert.com/b2b/v2?playlist=6.4.3&intensity=medium&pat=bXViZXJ0Zm9yc3RyZWFtZXJzLjE4NjgxNzM5LjAzZTgxNTg5NzJmMWMzM2IxM2Y2ZDVlOWQ2ZWI3MTdkYTNkOTM3NTcuMS4z.08deb4725ee7f6ef03af2e32710389590d00a48e6d3380897b448242675b72d9",
    "https://stream.mubert.com/b2b/v2?playlist=6.4.0&intensity=medium&pat=bXViZXJ0Zm9yc3RyZWFtZXJzLjE4NjgxNzM5LjAzZTgxNTg5NzJmMWMzM2IxM2Y2ZDVlOWQ2ZWI3MTdkYTNkOTM3NTcuMS4z.08deb4725ee7f6ef03af2e32710389590d00a48e6d3380897b448242675b72d9",
    "https://stream.mubert.com/b2b/v2?playlist=6.4.3&intensity=medium&pat=bXViZXJ0Zm9yYnVzaW5lc3MuMTkxNjA2ODEuMGJmNTQ4NmZlYjU0MmVlY2FiNjZiYTFlZWM1MDNhYWExZDA1MmYzMi4xLjM.802748dcd7ba181d437963b37b2448a0c125ba720b7a45b3fa364268b7aac3ac",
  ];

  // Generate a random index within the bounds of the array
  const randomIndex = Math.floor(Math.random() * musicList.length);

  // Get a random music
  return musicList[randomIndex];
};

export const delayAsync = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const muteNonActiveTabs = async () => {
  const currentTab = await Browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  currentTabId.set(currentTab[0].id);
  const message = {
    musicTab: currentTab[0].id,
  };
  await Browser.runtime.sendMessage(message);
};

export const getYoutubeIframe = (videoId: string) => {
  return `<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
};

export function getYouTubeVideoID(url: string): string | null {
    const regex = /(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regex);
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return null;
    }
}