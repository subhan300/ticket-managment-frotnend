import { defineConfig } from 'vite'
import postcss from './postcss.config.cjs'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  base: 'https://ticket-managment-frotnend.vercel.app/',
  server: {
    // Ensure HMR is enabled
    // hmr: true,
    // Specify the port if needed
    // port: 3000,
  },
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      store: path.resolve(__dirname, "./src/store"),
      utils: path.resolve(__dirname, "./src/utils"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      theme: path.resolve(__dirname, "./src/theme"),
      "styles-components": path.resolve(__dirname, "./src/styles-components"),
      data: path.resolve(__dirname, "./src/data"),
      "routes-components": path.resolve(__dirname, "./src/routes-components"),
      lib: path.resolve(__dirname, "./src/lib"),
      features: path.resolve(__dirname, "./src/features"),
      assets: path.resolve(__dirname, "./src/assets"),
      helper: path.resolve(__dirname, "./src/helper"),
      apis: path.resolve(__dirname, "./src/apis"),
    },
  },
  
 
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
