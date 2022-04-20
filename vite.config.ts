import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "Agenda de Blocos - Carnaval RJ",
        short_name: "Agenda de Blocos",
        theme_color: "#fff",
        display: "standalone",
        background_color: "#fff",
        icons: []
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
