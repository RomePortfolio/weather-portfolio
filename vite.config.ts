import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // if using the plugin

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})