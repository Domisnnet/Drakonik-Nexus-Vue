<template>
  <div
    class="relative w-full aspect-[5/7] cursor-pointer [perspective:1000px]"
    :class="{ 'pointer-events-none': isMatched }"
    @click="handleClick"
  >
    <!-- Inner container for the flip effect -->
    <div
      class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
      :class="{ '[transform:rotateY(180deg)]': isFlipped || isMatched }"
    >
      <div class="absolute w-full h-full [backface-visibility:hidden]">
        <img
          src="/images/frente-carta.jpg"
          alt="Verso da Carta"
          class="w-full h-full object-cover rounded-lg md:rounded-xl shadow-lg shadow-cyan-500/30"
        />
      </div>

      <div
        class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg md:rounded-xl overflow-hidden shadow-2xl border-2 border-slate-700"
        :class="`bg-[url('/images/${fundo}.jpg')] bg-cover`"
      >
        <div class="p-1.5 md:p-2 bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white">
          <div class="flex justify-between items-center">
            <h2 class="text-[0.6rem] sm:text-xs md:text-sm font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] pr-2">
              {{ nome }}
            </h2>
            <div class="flex items-center gap-1 text-yellow-400 flex-shrink-0">
              <span class="text-[0.55rem] sm:text-xs font-bold">LV</span>
              <span class="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-400 text-black text-[0.55rem] sm:text-xs font-bold">
                {{ nivel }}
              </span>
            </div>
          </div>
        </div>

        <div class="w-full h-[45%] my-0.5 md:my-1 border-y-2 md:border-y-4 border-slate-600 bg-black/30">
          <img
            :src="characterImageUrl"
            :alt="alt"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-1.5 md:p-2 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white text-[0.6rem] md:text-xs">
           <p class="text-[0.55rem] sm:text-[0.6rem] md:text-xs italic border-t border-slate-400 pt-1 mb-1 md:pt-2 md:mb-2 font-serif leading-tight">
            {{ descricao }}
          </p>
          <div class="text-right font-semibold scale-90 sm:scale-100 origin-right">
            <span>⚔️ ATK / {{ atk }}</span>
            <span class="ml-2 md:ml-3">🛡️ DEF / {{ def }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  cardId: Number,
  nome: String,
  fundo: String, 
  nivel: Number,
  imagem: String, 
  alt: String,
  descricao: String,
  atk: Number,
  def: Number,
  isFlipped: Boolean,
  isMatched: Boolean,
});

const emit = defineEmits(['flip-card']);

const characterImageUrl = computed(() => {
  if (props.imagem) {
    return `/images/${props.imagem}`;
  }
  return ''; 
});

function handleClick() {
    emit('flip-card', props.cardId);
}

</script>