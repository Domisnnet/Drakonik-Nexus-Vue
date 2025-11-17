# Blueprint: Drakonik Nexus

## Visão Geral

Drakonik Nexus é um jogo da memória interativo construído como uma Single-Page Application (SPA) usando Vue.js. O projeto foi desenvolvido com foco em performance, design moderno e uma experiência de usuário engajante. O objetivo do jogo é combinar todos os pares de cartas de dragões cibernéticos dentro de um tempo limite, testando a memória e a agilidade do jogador.

## Estrutura e Estilo

- **Framework**: Vue.js com `<script setup>` (Composition API).
- **Build Tool**: Vite.
- **Linguagem**: TypeScript.
- **Estilização**: Tailwind CSS para uma abordagem utility-first, com design responsivo e foco em dispositivos móveis. Os estilos são `scoped` por componente para garantir o encapsulamento.
- **Design**: Moderno e arrojado, com tema de fantasia científica, ícones interativos, texturas, sombras e uma paleta de cores vibrante para criar uma experiência imersiva.
- **Roteamento**: `vue-router` para navegação entre a tela inicial e a tela de jogo.
- **Gerenciamento de Estado**: `pinia` para um controle centralizado e reativo do estado do jogo (cartas, pontuação, movimentos, tempo).
- **Qualidade de Código**: ESLint e Prettier para linting e formatação.

## Funcionalidades Implementadas

- **Tela Inicial Imersiva**: Uma landing page com música de fundo, design impactante e um botão para iniciar o jogo.
- **Mecânica de Jogo da Memória**:
  - O tabuleiro de jogo embaralha e exibe 12 cartas (6 pares únicos).
  - O jogador pode virar duas cartas por vez.
  - Se as cartas formam um par, elas permanecem viradas e a pontuação aumenta.
  - Se não formam um par, elas são viradas de volta após um breve intervalo.
- **Painel de Status**: Exibe a pontuação, o número de movimentos e o tempo restante em tempo real.
- **Cronômetro Regressivo**: 
  - Um cronômetro de 2 minutos inicia na primeira jogada.
  - Se o tempo acabar, o jogo termina.
- **Fim de Jogo Centralizado**: 
  - Modais de tela cheia consistentes para condições de vitória ou tempo esgotado.
  - A lógica de exibição é centralizada em `GameView.vue` para evitar conflitos de interface.
- **Controles de Jogo**: Botões para "Reiniciar" o jogo ou voltar para a "Início".

---

## Plano de Desenvolvimento (Última Modificação)

**Objetivo:** Corrigir um conflito de UI onde múltiplas mensagens de fim de jogo eram exibidas simultaneamente e unificar a experiência do usuário.

**Passos Concluídos:**

1.  **Remoção de UI Duplicada:**
    - O modal de vitória que existia dentro do componente `src/components/game/GameBoard.vue` foi completamente removido. Este era o causador do conflito visual.

2.  **Centralização da Lógica de UI em `GameView.vue`**:
    - O componente `src/views/GameView.vue` agora é o único responsável por exibir as mensagens de fim de jogo.
    - Os banners de alerta que existiam anteriormente foram substituídos por modais de tela cheia, melhorando a experiência visual.
    - Foram criados dois modais distintos:
      - Um para a condição de **vitória** (`isGameOver && !isTimeUp`).
      - Um para a condição de **tempo esgotado** (`isTimeUp`).
    - Isso garante que apenas um modal seja exibido por vez e que a aparência seja consistente em todos os cenários de fim de jogo.

3.  **Atualização do `blueprint.md`**:
    - O documento foi atualizado para refletir a correção do bug e a nova arquitetura centralizada dos modais de fim de jogo.
