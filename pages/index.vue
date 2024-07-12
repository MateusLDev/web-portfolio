<script setup lang="ts">
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf";
  link.download = "Mateus Lopes CV.pdf";
  link.click();
};
</script>

<template>
  <div class="h-dvh flex flex-col items-center justify-center px-4 ove">
    <span
      class="text-subtitle text-base md:text-xl font-medium"
      data-aos="fade-up"
      data-aos-duration="1000"
      >Hi, I’m Mavue 💪</span
    >

    <h1
      class="text-title text-5xl font-bold text-center uppercase mt-2 mb-4"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
      Frontend developer
    </h1>

    <p
      class="text-description text-sm md:text-base text-center"
      data-aos="fade-up"
      data-aos-duration="1800"
    >
      I’m Mateus Lopes, a passionate
      <span class="font-medium">frontend developer </span> <br />
      an <span class="font-medium">UI/UX designer</span> based in Rio de
      Janeiro, Brazil
    </p>

    <div
      class="flex gap-3 md:gap-4 mt-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <Button text="Get in touch" variant="primary" />
      <Button text="Download CV" variant="outlined" @click="downloadCV" />
    </div>
  </div>
</template>
