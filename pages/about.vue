<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-x-8 items-center justify-center">
    <div class="blob"></div>

    <div>
      <h1 class="text-2xl font-bold text-black-800 uppercase mb-4">
        WHO AM I?
      </h1>

      <p class="max-w-[550px] text-black-700">
        I'm Mateus Lopes, a
        <span class="font-semibold">self-taught front-end developer</span> based
        in Brazil with over 5 years' experience developing responsive,
        high-performance web pages and systems. <br /><br />

        I have a solid background using
        <span class="font-semibold">Vue.js</span> and
        <span class="font-semibold">React.js</span> to create applications and,
        although I consider myself <span class="font-semibold">Frontend</span>,
        I have experience in the <span class="font-semibold">Backend</span>,
        with <span class="font-semibold">Node.js</span> and
        <span class="font-semibold">.Net</span>, creating solid and efficient
        solutions for scalable, high-performance applications. <br /><br />

        In parallel with development, I also work as a
        <span class="font-semibold">UI/UX designer</span>, seeking to understand
        users' needs and behaviors in order to create functional, attractive and
        intuitive digital solutions.
      </p>

      <div class="flex items-center justify-between mt-8">
        <Icon icon="logos:vue" :height="32" />
        <Icon icon="devicon:react" :height="32" />
        <Icon icon="devicon:typescript" :height="32" />
        <Icon icon="devicon:tailwindcss" :height="32" />
        <Icon icon="logos:figma" :height="32" />
        <Icon icon="logos:nodejs-icon" :height="32" />
        <Icon icon="devicon:dot-net" :height="32" />
      </div>
    </div>
  </div>
</template>
