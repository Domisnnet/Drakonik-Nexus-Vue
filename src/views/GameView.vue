<template>
  <div class="relative flex flex-col items-center justify-center w-full h-full">
    <FlipCard />
    <SliderNavigator />
  </div>
</template>

<script setup>
import FlipCard from "@/components/game/FlipCard.vue";
import SliderNavigator from "@/components/ui/SliderNavigator.vue";
</script>