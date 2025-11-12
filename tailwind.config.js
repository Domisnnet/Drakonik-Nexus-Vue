/** @type {import('tailwindcss').Config} */
export default {
  // Arquivos a serem analisados pelo Tailwind para gerar o CSS
  content: [
    "./index.html", // O ponto de entrada principal
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Todos os arquivos Vue e JS/TS na pasta src
  ],
  // Tema para customizações (cores, fontes, etc.)
  theme: {
    extend: {},
  },
  // Plugins para funcionalidades extras
  plugins: [],
}
