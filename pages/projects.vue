<script setup lang="ts">
import { Icon } from "@iconify/vue";

const projects = [
  {
    image: "",
    title: "Carlos Maia Portfolio",
    technologies: "REACT, TYPESCRIPT, NODE, FIREBASE",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: "",
    title: "Carlos Maia Portfolio",
    technologies: "REACT, TYPESCRIPT, NODE, FIREBASE",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: "",
    title: "Carlos Maia Portfolio",
    technologies: "REACT, TYPESCRIPT, NODE, FIREBASE",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: "",
    title: "Carlos Maia Portfolio",
    technologies: "REACT, TYPESCRIPT, NODE, FIREBASE",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];
</script>

<template>
  <h1 class="text-2xl font-bold text-black-800 uppercase mb-4">PROJECTS</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
    <ProjectCard
      v-for="(item, index) in projects"
      :key="index"
      :project="item"
    />
  </div>
</template>
