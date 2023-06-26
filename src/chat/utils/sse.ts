import { createParser } from "eventsource-parser";
import { isEmpty } from "lodash-es";
import { streamAsyncIterable } from "./stream-async-iterable";

export async function parseSSEResponse(
  resp: Response,
  onMessage: (message: string) => void
) {
  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}));
    throw new Error(
      !isEmpty(error)
        ? JSON.stringify(error)
        : `${resp.status} ${resp.statusText}`
    );
  }
  const parser = createParser((event) => {
    if (event.type === "event") {
      onMessage(event.data);
    }
  });

  const decoder = new TextDecoder();
  // @ts-ignore
  for await (const chunk of streamAsyncIterable(resp.body!)) {
    const str = decoder.decode(chunk);
    parser.feed(str);
  }
}
