import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo from a subfolder, so every built asset URL
  // needs that prefix. Must match the repo name exactly. Paths in content.js
  // go through the asset() helper in src/lib/asset.js for the same reason.
  base: '/raghav-portfolio/',
  build: {
    // Two pages: the portfolio, and the unlisted visitor dashboard at /count/.
    rollupOptions: {
      input: {
        main: 'index.html',
        count: 'count/index.html',
      },
    },
  },
})
