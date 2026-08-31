import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '../Web Docs',
  publicDir: './assets',
  plugins: [tailwindcss()],
  server: { fs: { allow: ['..'] } },
  build: { target: 'es2022' },
})
