<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const router = useRouter();
const route = useRouter();

const isMobileDevices = breakpoints.smaller("lg");

watch(
  () => isMobileDevices.value,
  () => {
    if (!isMobileDevices.value && showMenu.value) closeMenu();
  }
);

const menuLinks = [
  { text: "Home", path: "/", name: "index" },
  { text: "About me", path: "/about", name: "about" },
  { text: "Projects", path: "/projects", name: "projects" },
  { text: "Contacts", path: "/contacts", name: "contacts" },
];

const closeMenu = () => (showMenu.value = false);

const navigateTo = (path: string) => {
  router.push(path);
  closeMenu();
};

const showMenu = ref(false);
</script>

<template>
  <div
    class="fixed top-4 left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-between bg-white-800 p-4 rounded-full w-full lg:w-[600px] z-30"
  >
    <img src="../assets/logo.png" alt="" />

    <div
      class="hidden lg:flex gap-4"
      :class="{
        'absolute -top-4 left-0 h-dvh w-full !flex flex-col items-center justify-center bg-white-800 z-30':
          showMenu && isMobileDevices,
      }"
    >
      <Icon
        icon="material-symbols:close"
        :height="32"
        class="absolute right-4 top-6 flex lg:hidden"
        @click="showMenu = !showMenu"
      />

      <p
        v-for="(item, index) in menuLinks"
        :key="index"
        class="lg:text-sm cursor-pointer"
        :class="{
          'font-semibold': route.currentRoute.value.name === item.name,
          'text-2xl': showMenu,
        }"
        @click="navigateTo(item.path)"
      >
        {{ item.text }}
      </p>
    </div>

    <div class="hidden lg:flex items-center gap-3">
      <p class="text-sm cursor-pointer font-semibold">EN</p>
      <ThemeToggler />
    </div>

    <Icon
      icon="material-symbols:menu"
      :height="24"
      class="flex lg:hidden"
      @click="showMenu = !showMenu"
    />
  </div>
</template>
