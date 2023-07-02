<div class="w-2 h-full wavy-background flex-none" />

<style>
  .wavy-background {
    background: linear-gradient(
      to bottom,
      rgba(247, 16, 101, 0.7) 0%,
      rgb(22, 47, 231) 100%
    );
    background-size: 400% 400%;
    animation: wave 5s infinite alternate;
  }

  @keyframes wave {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 100%;
    }
  }
</style>
