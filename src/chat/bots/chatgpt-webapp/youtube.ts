import { parse } from "node-html-parser";
import Browser from "webextension-polyfill";

const getRandomUserAgent = () => {
  // generate a random user agent
  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0",
  ];
  return userAgents[Math.floor(Math.random() * userAgents.length)];
};

const getRandomIpAddress = () => {
  // generate a random IP address
  return `${Math.floor(Math.random() * 256)}.${Math.floor(
    Math.random() * 256
  )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
};

const getHTML = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": getRandomUserAgent(),
      "X-Forwarded-For": getRandomIpAddress(),
    },
  });
  return await response.text();
};

export const getSearchResults = async (
  query: string,
  isSpecificVideo = false
) => {
  let searchResults = [];
  let videoResults = [];
  let startIndex = 0;
  let endIndex = 0;

  if (!isSpecificVideo) {
    let baseUrl = `https://www.youtube.com/results?search_query=${query}`;

    const html = await getHTML(baseUrl);

    const maxResults = 10;

    for (let i = 0; i < maxResults; i++) {
      startIndex = html.indexOf('{"videoRenderer":', endIndex);
      if (startIndex === -1) break;
      endIndex = html.indexOf('},{"videoRenderer"', startIndex);
      try {
        searchResults.push(
          JSON.parse(html.substring(startIndex, endIndex + 1))
        );
        videoResults = await fetchTranscripts(searchResults.slice(0, 6));
      } catch (error) {
        // error
      }
    }
  } else {
    const videoId = query;
    searchResults = [1];
    videoResults = await fetchTranscripts(searchResults, videoId);
  }

  return videoResults as VideoResult[];
};

export interface VideoResult {
  id: string;
  title: string;
  transcript: string;
}

interface ResultEntry {
  videoRenderer?: {
    videoId?: string;
    title?: {
      runs?: {
        at(index: number): {
          text: string;
        };
      };
    };
  };
}

const fetchTranscript = async (
  videoId: string,
  title: string,
  threshold: number
): Promise<VideoResult[] | null> => {
  const response = await fetch(
    `https://youtubetranscript.com/?server_vid2=${videoId}`
  );
  if (response.ok) {
    const data = await response.text();
    const transcript = parse(data).querySelector("transcript")?.textContent;
    if (data && transcript && transcript.length > threshold) {
      let videoResults: VideoResult[] | null = [];
      for (
        let index = 0;
        index < Math.floor(transcript.length / threshold);
        index++
      ) {
        videoResults.push({
          id: videoId,
          title: title.slice(0, threshold),
          transcript: transcript.slice(
            index * threshold,
            index * threshold + threshold
          ),
        });
      }
      return videoResults;
    } else if (transcript) {
      return [
        {
          id: videoId,
          title: title.slice(0, threshold),
          transcript: transcript,
        },
      ];
    }
    return null;
  }
  return null;
};

const fetchTranscripts = async (
  results: ResultEntry[],
  videoInputId = ""
): Promise<VideoResult[]> => {
  let threshold = 3000;
  let maxLength = 6;
  const resultLang = await Browser.storage.sync.get("langOption");
  if (resultLang?.langOption && !resultLang.langOption.includes("en")) {
    threshold = 2000;
    maxLength = 3;
  }
  const videoPromises = results.map(async (result) => {
    if (videoInputId) {
      const videoId = videoInputId;
      const title = "";
      if (videoId) {
        return fetchTranscript(videoId, title, threshold);
      }
      return null;
    } else {
      const videoId = result?.videoRenderer?.videoId;
      const title = result?.videoRenderer?.title?.runs?.at(0)?.text;
      if (videoId && title) {
        return fetchTranscript(videoId, title, threshold);
      }
      return null;
    }
  });

  const videoResults = await Promise.all(videoPromises);
  let finalResult: VideoResult[] = [];
  for (let index = 0; index < videoResults.length; index++) {
    const result = videoResults[index];
    if (Array.isArray(result)) {
      finalResult.push(...result);
    }
  }
  return finalResult.slice(0, maxLength);
};
