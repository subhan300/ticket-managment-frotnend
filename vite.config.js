import { defineConfig } from 'vite'
import postcss from './postcss.config.cjs'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
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
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
