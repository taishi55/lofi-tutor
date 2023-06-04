<script lang="ts">
  import { currentLocale } from "../../store";

  function isSpeechRecognitionSupported() {
    return "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
  }

  function isLanguageSupported() {
    // @ts-expect-error
    const recognition = new (window.SpeechRecognition ||
      // @ts-expect-error
      window.webkitSpeechRecognition)();
    return recognition.lang === $currentLocale;
  }

  function convertSpeechToText() {
    if (isSpeechRecognitionSupported() && isLanguageSupported()) {
      // @ts-expect-error
      const recognition = new (window.SpeechRecognition ||
        // @ts-expect-error
        window.webkitSpeechRecognition)();
      recognition.lang = $currentLocale;

      recognition.start();

      recognition.onstart = function () {
        console.log("Speech recognition started.");
      };

      recognition.onresult = function (event: any) {
        const transcript = event.results[0][0].transcript;
        console.log("Speech recognition result:", transcript);
      };

      recognition.onend = function () {
        console.log("Speech recognition ended.");
      };
    } else {
      console.log(
        "Speech recognition not supported or language not compatible."
      );
    }
  }

  convertSpeechToText();

  let isCompatible = false;

  $: if ($currentLocale) {
    isCompatible = isLanguageSupported();
  }
</script>

<div>
  <button>
    <i class="fa-solid fa-microphone" />
  </button>
</div>
