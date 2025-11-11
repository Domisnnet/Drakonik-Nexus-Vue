<template>
  <div
    class="grid grid-cols-4 gap-4 p-5 bg-black/40 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.3)] mx-auto my-5 max-w-[900px]
           md:grid-cols-3 sm:grid-cols-2">
    <FlipCard
      v-for="card in gameStore.cards"
      :key="card.id"
      :card-id="card.id"
      :nome="card.nome"
      :fundo="card.fundo"
      :nivel="card.nivel"
      :imagem="card.imagem"
      :alt="card.alt"
      :descricao="card.descricao"
      :atk="card.atk"
      :def="card.def"
      :is-matched="card.isMatched"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGameStore } from "../../stores/game";
import FlipCard from "./FlipCard.vue";

const gameStore = useGameStore();

onMounted(() => {
  if (gameStore.cards.length === 0) {
    gameStore.initializeGame();
  }
});
</script>