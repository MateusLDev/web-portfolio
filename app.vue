<script setup lang="ts">
import LightBackground from "./assets/light-background.mp4";
import DarkBackground from "./assets/dark-background.mp4";
import AOS from "aos";

const colorMode = useColorMode();
const updateKey = ref(0);

useSeoMeta({
  title: "Mateus Lopes | Front-end Developer",
  ogTitle: "Mateus Lopes | Front-end Developer",
  description:
    "a Self-taught front-end developer based in Brazil with over 5 years experience developing responsive, high-performance web pages and systems",
  ogDescription:
    "a Self-taught front-end developer based in Brazil with over 5 years experience developing responsive, high-performance web pages and systems",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

const backgroundVideoByTheme = computed(() => {
  updateKey.value++;
  return colorMode.preference === "dark" ? DarkBackground : LightBackground;
});

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <video
    :key="updateKey"
    autoplay
    muted
    loop
    webkit-playsinline
    playsinline
    id="myVideo"
    class="absolute right-0 top-0 w-full h-dvh opacity-[0.04] object-cover pointer-events-none"
  >
    <source :src="backgroundVideoByTheme" type="video/mp4" />
  </video>

  <Navbar />
  <div class="container mx-auto px-4 h-full">
    <NuxtPage class="h-dvh relative z-20" />
  </div>
</template>
