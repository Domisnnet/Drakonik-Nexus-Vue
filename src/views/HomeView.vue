<template>
  <div
    class="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-purple-950 to-black overflow-hidden"
  >
    <img
      src="/images/tela-inicial.jpg"
      alt="Aegis Knight"
      class="w-2/3 md:w-1/2 object-contain opacity-90 animate-fade-in"
    />

    <h1 class="absolute bottom-10 text-purple-400 text-4xl font-bold drop-shadow-lg">
      Drakonik Nexus!
    </h1>
  </div>
</template>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fade-in 2s ease-out forwards;
}
</style>