import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject';


// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Set Vite to run on port 3000
  },
  plugins: [

    react(),

    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

  ],
  build: {
    outDir: 'dist',  // Output directory for build files
  },
})