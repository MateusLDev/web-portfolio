<script setup lang="ts">
interface ProjectCardInterface {
  image: string;
  title: string;
  technologies?: string;
  description: string;
}

interface ProjectCardProps {
  project: ProjectCardInterface
}

const { project } = defineProps<ProjectCardProps>();
</script>

<template>
  <div class="flex flex-col md:flex-row gap-5 bg-white-700 rounded-2xl p-6 pb-0 z-30">
    <img src="../assets/project-image.png" alt="" />

    <div>
      <p class="text-black-800 font-semibold text-base uppercase">
        {{ project.title }}
      </p>
      <span
        v-if="project.technologies"
        class="text-black-800 font-semibold text-xs uppercase"
        >Tech: {{ project.technologies }}</span
      >

      <p class="text-gray-800 text-xs">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
