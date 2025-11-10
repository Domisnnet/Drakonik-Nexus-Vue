<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { timeline } from "motion";

const emit = defineEmits<{ (e: "start"): void }>();

const transitionActive = ref(false);
let audio: HTMLAudioElement;

const triggerTransition = () => {
  transitionActive.value = true;
  timeline([[".animate-flashEnergy", { opacity: [0, 1, 0] }, { duration: 1.5 }]]);
  setTimeout(() => {
    transitionActive.value = false;
    emit("start");
  }, 1500);
};

onMounted(() => {
  // O caminho foi corrigido para buscar o áudio da pasta 'public'
  audio = new Audio("/sounds/intro-sound.mp3");
  audio.loop = true;
  audio.volume = 0.5;
  audio.play().catch(error => {
    console.error("Audio playback failed:", error);
    // A reprodução automática pode ser bloqueada pelo navegador.
    // Adicionar um botão de 'play' ou interagir com a página primeiro pode resolver isso.
  });

  document.addEventListener("global-volume-change", (e: any) => {
    if (audio) audio.volume = e.detail;
  });
  document.addEventListener("global-mute-change", (e: any) => {
    if (audio) audio.muted = e.detail;
  });
});

onBeforeUnmount(() => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0; // Reseta o áudio
  }
});
</script>

<template>
  <!-- Este componente é puramente lógico e não renderiza HTML -->
</template>

<style scoped>
/* Estilos, se necessários */
</style>
