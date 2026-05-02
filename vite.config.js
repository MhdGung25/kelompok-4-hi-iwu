// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Ubah bagian ini

export default defineConfig({
  plugins: [react()],
  base: '/', 
})