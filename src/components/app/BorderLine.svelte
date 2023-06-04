<div class="w-2 h-full wavy-background flex-none" />

<style>
  .wavy-background {
    background: linear-gradient(
      to bottom,
      rgba(107, 107, 107, 0.511) 0%,
      rgb(32, 32, 32) 100%
    );
    background-size: 400% 400%;
    animation: wave 3s infinite alternate;
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
