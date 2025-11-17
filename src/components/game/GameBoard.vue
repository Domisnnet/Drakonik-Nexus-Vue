<template>
  <div class="w-full max-w-5xl mx-auto px-4 py-8">
    <!-- Grade do jogo: Responsiva -->
    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <FlipCard
        v-for="card in game.cards"
        :id="card.id"
        :key="card.id"
        :nome="card.nome"
        :fundo="card.fundo"
        :nivel="card.nivel"
        :imagem="card.imagem"
        :alt="card.alt"
        :descricao="card.descricao"
        :atk="card.atk"
        :def="card.def"
        :is-flipped="card.isFlipped"
        :is-matched="card.isMatched"
        @flip-card="game.flipCard"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGameStore } from '../../stores/game';
import FlipCard from './FlipCard.vue';

const game = useGameStore();

onMounted(() => {
  game.initializeGame();
});
</script>
