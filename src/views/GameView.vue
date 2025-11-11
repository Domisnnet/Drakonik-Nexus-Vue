<template>
  <BaseLayout>
    <div class="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <SliderNavigator />
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import SliderNavigator from "@/components/ui/SliderNavigator.vue";
</script>