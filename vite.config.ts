import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  server: {
    allowedHosts: ['.ngrok-free.app']
  },
  esbuild: {
    // @ts-expect-error - Vite's ESBuildOptions type does not include legalComments, but it is passed to esbuild during build
    legalComments: 'none'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
            return 'vendor';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'ui';
          }
        }
      }
    }
  }
})
