<script setup lang="ts">
import LightBackground from "./assets/light-background.mp4";
import DarkBackground from "./assets/dark-background.mp4";
import AOS from "aos";

const colorMode = useColorMode();
const updateKey = ref(0);

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
    id="myVideo"
    class="absolute right-0 bottom-0 w-full opacity-[0.04] object-cover"
  >
    <source :src="backgroundVideoByTheme" type="video/mp4" />
  </video>

  <Navbar />
  <div class="container mx-auto px-4 h-full">
    <NuxtPage class="h-dvh relative z-20" />
  </div>
</template>
