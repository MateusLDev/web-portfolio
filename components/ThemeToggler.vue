<script setup lang="ts">
import { Icon } from "@iconify/vue";

const colorMode = useColorMode();

const isDark = computed(() => colorMode.preference === "dark");

const toggleTheme = async () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <div
    class="border border-title rounded-full p-1 cursor-pointer"
    @click="toggleTheme()"
  >
    <Icon v-if="isDark" icon="ph:sun" :height="16" class="text-title" />
    <Icon v-else icon="fontisto:night-clear" :height="16" class="text-title" />
  </div>
</template>
