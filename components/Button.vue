<script setup lang="ts">
type ButtonVariantType = "primary" | "outlined" | "outlinded dark";

enum buttonColors {
  primary = "border-primary bg-primary text-white-900",
  outlined = "border-primary bg-white-900 text-primary",
  "outlinded dark" = "border-white-900 bg-black-800 text-white-900",
}

interface ButtonPropsInterface {
  text: string;
  variant: ButtonVariantType;
}

const { text, variant } = defineProps<ButtonPropsInterface>();

const buttonStyle = computed(() => {
  return buttonColors[variant];
});
</script>

<template>
  <button
    class="border px-4 py-2 rounded-md font-medium text-xs"
    :class="buttonStyle"
  >
    {{ text }}
  </button>
</template>
