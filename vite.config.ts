import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración obligatoria para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/EJERCICIOS-TYPESCRIPT---REACT/',
})