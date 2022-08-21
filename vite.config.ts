import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS({
      // transformCSS: "pre",
    }),
  ],
  server: {
    port: 8000
  },
  build: {
    outDir: '../aethers-ladder-backend/static'
  },
  // optimizeDeps: {
  //   include: ["introJs"]
  // }
})
