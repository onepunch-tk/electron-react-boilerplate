import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import {resolve} from "path";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/renderer'),
      '@shared': resolve(__dirname, './src/shared')
    }
  },
  build: {
    outDir: 'dist/renderer'
  }
})
