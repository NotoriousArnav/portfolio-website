import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Run in all network interfaces
  server: {
    host: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  assetsInclude: ["**/*.gltf", "**/*.glb"]
})
