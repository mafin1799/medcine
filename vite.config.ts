import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {} from 'vite-react-ssg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
