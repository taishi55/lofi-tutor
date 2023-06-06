<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Base from "../components/share/Base.svelte";
  let isMounted = false;
  onMount(() => {
    setTimeout(() => {
      isMounted = true;
    }, 400);
  });

  const myProfile = [
    { key: "fav food", value: "tomato" },
    { key: "fav sports", value: "soccer" },
    { key: "fav hobbie", value: "skydiving (certified)" },
    { key: "fav lang", value: "typescript" },
    { key: "fav music", value: "dancing in the moonlight" },
    { key: "fav place", value: "big island, Hawaii" },
    { key: "origin", value: "Tokyo, Japan" },
    { key: "current", value: "Los Angels" },
    { key: "future", value: "Dubai" },
  ];
</script>

{#if isMounted}
  <Base>
    <div class="mt-3">
      <div
        class="w-[87px] h-[87px] bg-gradient-to-bl from-pink-500 to-yellow-300 rounded-full flex justify-center items-center mx-auto"
      >
        <div
          class="bg-white rounded-full w-[80px] h-[80px] z-10 shadow-inner shadow-slate-600 flex justify-center items-center overflow-hidden relative"
        >
          <div
            class=" absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/30 via-slate-900/10 to-slate-900/30 z-30"
          />
          <div
            class="w-[70px] h-[70px] overflow-hidden flex items-center rounded-full justify-center"
          >
            <img
              class="aspect-square rotate-y block rounded-full object-cover bg-center w-full"
              src="https://i.pinimg.com/750x/bd/89/e3/bd89e31a0d7c5c3209e163ccd98fd70b.jpg"
              alt="ninja"
            />
          </div>
        </div>
      </div>
    </div>
    <div class=" font-semibold text-xl mt-2 mb-5 text-center">
      Taishi Nammoto
    </div>

    {#each myProfile as item, index}
      <div class=" grid grid-cols-2 text-base font-light italic">
        <div
          in:fly={{ duration: 2000, x: 100, delay: 200 * (index + 1) }}
          class="text-right border-r border-slate-300 dark:border-slate-500 pr-2 pb-2"
        >
          {item.key}
        </div>
        <div
          in:fly={{ duration: 2000, x: -100, delay: 200 * (index + 1) + 100 }}
          class="text-left pl-2 pb-2"
        >
          {item.value}
        </div>
      </div>
    {/each}

    <div
      in:fly={{ duration: 2000, y: -100, delay: myProfile.length * 200 + 500 }}
      class="text-base font-light mt-6 mx-auto max-w-sm text-center space-y-2"
    >
      <div>
        I'm the developer behind the development of this entire extension. I
        would also like to give thanks the talented freelancers who created the
        awesome animations featured in the Lofi Tutor character. <br />Connect
        with me on
        <a
          href="https://www.linkedin.com/in/taishi-nammoto/"
          target="_blank"
          class="text-blue-600 underline dark:text-blue-400"
          rel="noopener noreferrer">LinkedIn</a
        >!
      </div>
    </div>
  </Base>
{:else}
  <div class="h-full" />
{/if}

<style lang="postcss" scoped>
  .rotate-y {
    animation: rotateAnimation 6s linear;
  }

  @keyframes rotateAnimation {
    0% {
      transform: rotateY(0deg) translateX(-100px);
      opacity: 100%;
    }
    40% {
      transform: rotateY(160deg) translateX(100px);
      opacity: 40%;
    }
    50% {
      opacity: 10%;
      transform: rotate(30deg);
    }
    60% {
      transform: rotateY(200deg) translateX(-80px);
      opacity: 40%;
    }
    100% {
      transform: rotateY(360deg) translateX(0px);
      opacity: 100%;
    }
  }
</style>
