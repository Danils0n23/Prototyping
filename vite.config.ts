import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "freejs": "/node_modules/freejs", // Alias caso seja necessário
    },
  },
  optimizeDeps: {
    include: ["freejs"], // Incluindo o freejs nas dependências otimizadas
  },
});
