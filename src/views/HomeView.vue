<template>
  <div
    class="relative h-screen flex flex-col items-center justify-end pb-20 md:pb-24 overflow-hidden transition-opacity duration-1000"
    :class="{ 'opacity-0': fadingOut }"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="block xl:hidden h-full w-full bg-cover bg-center brightness-75"
        style="background-image: url('/images/dragon-mobile.jpg');"
      ></div>

      <div class="hidden xl:flex w-full h-full">
        <div
          class="h-full w-1/2 bg-cover bg-no-repeat bg-center brightness-75 transform -scale-x-100"
          style="background-image: url('/images/dragon-left.png');"
        ></div>
        <div
          class="h-full w-1/2 bg-cover bg-no-repeat bg-center brightness-75"
          style="background-image: url('/images/dragon-right.png');"
        ></div>
      </div>
    </div>

    <div class="absolute inset-0 z-10">
      <canvas ref="particlesCanvas" class="w-full h-full"></canvas>
    </div>

    <div class="relative z-20 flex flex-col items-center text-center px-4">
      <h1
        class="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(128,0,255,0.8)] mb-8 animate-fade-in"
      >
        Drakonik Nexus!
      </h1>

      <button
        @click="startGame"
        class="px-8 py-3 text-lg font-semibold text-white bg-black border-2 border-gray-600 rounded-xl hover:bg-purple-800 hover:border-purple-700 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(140,0,255,0.9)]"
      >
        Iniciar
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const particlesCanvas = ref(null);
const fadingOut = ref(false);

const startGame = () => {
  const audio = new Audio("/sounds/intro-sound.mp3");
  audio.play();

  fadingOut.value = true;
  setTimeout(() => {
    router.push("/game");
  }, 1200); 
};

onMounted(() => {
  const canvas = particlesCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const particles = [];
  let particleCount = 100;

  const setupParticles = () => {
    particles.length = 0; 
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 1, 
        d: Math.random() * 1 + 0.5,   
      });
    }
  };

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleCount = window.innerWidth < 768 ? 50 : 100;
    setupParticles();
  };

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas(); 

  const animate = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(179, 136, 255, 0.6)"; 
    
    ctx.beginPath();
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
    }
    ctx.fill();

    // Mover partículas
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y -= p.d;
      if (p.y < -p.r) {
        p.y = canvas.height + p.r;
        p.x = Math.random() * canvas.width;
      }
    }

    requestAnimationFrame(animate);
  };

  animate();
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.5s ease-out forwards;
}
</style>