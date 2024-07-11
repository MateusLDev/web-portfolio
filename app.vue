<template>
  <video
    autoplay
    muted
    loop
    id="myVideo"
    class="fixed right-0 bottom-0 w-full opacity-[0.04] object-cover"
  >
    <source src="./assets/light-background.mp4" type="video/mp4" />
  </video>

  <div class="container mx-auto px-4">
    <NuxtPage class="h-dvh relative z-20" />
  </div>
</template>
