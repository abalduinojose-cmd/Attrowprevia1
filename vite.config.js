import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // No GitHub Pages o site fica em /NomeDoRepositorio/, então o build
  // precisa saber o caminho base (definido pelo workflow de deploy).
  base: process.env.DEPLOY_BASE || "/",
  plugins: [react(), tailwindcss()],
  server: {
    port: 5176,
  },
});
