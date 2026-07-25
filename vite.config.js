import { defineConfig } from 'vite-plus';
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [tailwindcss()],
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg"],
  },
  build: {
    rolldownOptions: {
      input: [
        "index.html",
        "tubular/index.html",
        "tubular/mux.html",
        "tubular/results.html",
        "tc-landing/index.html"
      ]
    }
  }
});
