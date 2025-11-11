<template>
  <div
    class="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-indigo-950 to-black overflow-hidden"
  >
    <!-- Efeito de energia no fundo -->
    <div class="absolute inset-0 animate-rotateBg opacity-40">
      <div
        class="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]"
      ></div>
    </div>

    <!-- Cabeçalho -->
    <header
      class="z-10 text-center mb-6 drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]"
    >
      <h1
        class="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-700 bg-clip-text text-transparent"
      >
        Drakonik Nexus!
      </h1>
    </header>

    <!-- Área principal -->
    <main
      class="relative flex items-center justify-center w-full flex-1 z-10 max-w-6xl px-4"
    >
      <!-- Seta esquerda -->
      <button
        @click="previousCard"
        class="absolute left-4 md:left-10 text-purple-400 hover:text-white text-4xl transition transform hover:scale-110"
      >
        ◀
      </button>

      <!-- Card central -->
      <div class="flex justify-center items-center w-full">
        <FlipCard
          v-if="currentCard"
          :fundo="currentCard.fundo"
          :card-state="currentCard.cardState"
          :content-url="currentCard.contentUrl"
          :alt="currentCard.alt"
          :nivel="currentCard.nivel"
          :descricao="currentCard.descricao"
          :atk="currentCard.atk"
          :def="currentCard.def"
          @click-event="flipCard"
          class="transition-transform duration-500 hover:scale-105 mx-auto"
        />
      </div>

      <!-- Seta direita -->
      <button
        @click="nextCard"
        class="absolute right-4 md:right-10 text-purple-400 hover:text-white text-4xl transition transform hover:scale-110"
      >
        ▶
      </button>
    </main>

    <!-- Botão Voltar -->
    <footer class="z-10 mt-6 mb-4">
      <router-link
        to="/"
        class="text-indigo-300 hover:text-purple-400 transition text-lg"
      >
        Voltar à Tela Inicial
      </router-link>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useGameStore } from "@/stores/game";
import FlipCard from "@/components/game/FlipCard.vue";

const gameStore = useGameStore();
const currentIndex = ref(0);

onMounted(() => {
  if (gameStore.cards.length === 0) {
    gameStore.initializeGame();
  }
});

const currentCard = computed(() => gameStore.cards[currentIndex.value]);

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % gameStore.cards.length;
};

const previousCard = () => {
  currentIndex.value =
    (currentIndex.value - 1 + gameStore.cards.length) % gameStore.cards.length;
};

const flipCard = () => {
  if (currentCard.value) {
    gameStore.handleCardClick(currentCard.value.id);
  }
};
</script>

<style scoped>
@keyframes rotateBg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-rotateBg {
  animation: rotateBg 30s linear infinite;
}
</style>