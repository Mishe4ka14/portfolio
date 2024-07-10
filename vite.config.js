import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./", // Указываем базовый путь для относительных URL
  build: {
    outDir: "dist", // Изменяем выходную директорию, если это необходимо
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
