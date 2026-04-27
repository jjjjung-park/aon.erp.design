import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    vue(),
    viteSingleFile(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    watch: mode === 'development'
      ? { exclude: ['dist/**'] }
      : undefined,
    rollupOptions: {
      input: 'index.html',
    },
    cssCodeSplit: false,
  },
}))
