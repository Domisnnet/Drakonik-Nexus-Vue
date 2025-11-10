<template>
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-4">Game</h2>
      <div class="space-y-6">
        <GameBoard />
        <SliderNavigator />
      </div>
    </div>
</template>
  
<script setup lang="ts">
  import GameBoard from '@/components/game/GameBoard.vue'
  import SliderNavigator from '@/components/ui/SliderNavigator.vue'
</script>

<style scoped></style>  