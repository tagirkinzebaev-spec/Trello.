import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      port: 3000,
      overlay: false // Отключить оверлей с ошибками
    },
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'], // Игнорировать эти папки
      usePolling: false // Отключить polling для лучшей производительности
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  base: './'
})
