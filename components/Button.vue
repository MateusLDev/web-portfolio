<script setup lang="ts">
type ButtonVariantType = "primary" | "outlined";

enum buttonColors {
  primary = "border-primary bg-primary text-primary-foreground",
  outlined = "border-border bg-background text-border",
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
    class="border px-4 py-2 rounded-md font-medium text-base"
    :class="buttonStyle"
  >
    {{ text }}
  </button>
</template>
