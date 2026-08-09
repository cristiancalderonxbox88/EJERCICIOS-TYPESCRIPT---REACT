import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Esto le dice a GitHub dónde buscar los archivos
  base: '/EJERCICIOS-TYPESCRIPT---REACT/',
})