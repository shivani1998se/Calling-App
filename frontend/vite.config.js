
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // ← Add this line
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Ensure this matches your backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
