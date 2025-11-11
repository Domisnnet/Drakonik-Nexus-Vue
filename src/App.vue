<template>
  <div id="app-container">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#app-container {
  position: fixed; /* Ocupa a tela inteira, independente do scroll */
  inset: 0; /* Atalho para top: 0; right: 0; bottom: 0; left: 0; */
  overflow: hidden; /* A regra de ouro: esconde qualquer conteúdo que transborde */
  width: 100%;
  height: 100%;
}
</style>