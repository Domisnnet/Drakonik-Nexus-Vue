# Blueprint: Drakonik Nexus

## Visão Geral

Uma aplicação Vue.js de página única (SPA) construída com Vite e TypeScript. O objetivo é criar uma interface de usuário moderna e reativa, utilizando as melhores práticas do ecossistema Vue, como a Composition API e o gerenciamento de estado com Pinia.

## Estrutura e Estilo

- **Framework**: Vue.js com `<script setup>` (Composition API).
- **Build Tool**: Vite.
- **Linguagem**: TypeScript.
- **Estilização**: Tailwind CSS para uma abordagem utility-first e estilos `scoped` por componente.
- **Roteamento**: `vue-router` para navegação entre páginas.
- **Gerenciamento de Estado**: `pinia` para estado global.
- **Testes**: `vitest` para testes unitários e `cypress` para testes e2e.
- **Qualidade de Código**: ESLint e Prettier para linting e formatação.

## Plano de Correção Atual

**Problema:** A aplicação não renderiza e o console do navegador mostra o erro `[Vue warn]: Failed to resolve component: router-view`.

**Objetivo:** Corrigir a inicialização do `vue-router` para que as rotas sejam carregadas corretamente.

**Passos:**

1.  **Analisar `src/main.ts`**: Verificar se a instância do router está sendo importada e registrada na aplicação Vue com `app.use(router)`.
2.  **Analisar `src/router/index.ts`**: Garantir que o router está sendo criado corretamente com `createRouter` e que as rotas estão definidas.
3.  **Analisar `src/App.vue`**: Confirmar que o componente `<router-view>` está presente no template para renderizar as páginas.
4.  **Aplicar a Correção**: Adicionar o registro do router em `src/main.ts` se estiver faltando.
