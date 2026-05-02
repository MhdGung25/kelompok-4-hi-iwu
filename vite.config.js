// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/react-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Pastikan ini '/' bukan './' atau dikosongkan
})