<script setup lang="ts">
const router = useRouter()
const route = useRouter()
const menuLinks = [
  { text: "Home", path: "/", name: 'index' },
  { text: "About me", path: "/about", name: 'about' },
  { text: "Projects", path: "/projects", name: 'projects' },
  { text: "Contacts", path: "/contacts", name: 'contacts' },
];
</script>

<template>
  <div
    class="absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-between bg-white-800 p-4 rounded-full w-full md:w-[600px] z-30"
  >
    <img src="../assets/logo.png" alt="" />
    <div class="hidden md:flex gap-x-4">
      <p
        v-for="(item, index) in menuLinks"
        :key="index"
        class="text-sm cursor-pointer"
        :class="{ 'font-semibold': route.currentRoute.value.name === item.name }"
        @click="router.push(item.path)"
      >
        {{ item.text }}
      </p>
    </div>

    <div>button</div>
  </div>
</template>
