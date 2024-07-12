<script setup lang="ts">
import { Icon } from "@iconify/vue";

const colorMode = useColorMode();

const toggleTheme = async () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div class="border border-title rounded-full p-1 cursor-pointer" @click="toggleTheme()">
    <Icon icon="fontisto:night-clear" :height="16" />
  </div>
</template>
