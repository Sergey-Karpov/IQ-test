import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/imports.scss";
          @import "./src/assets/scss/global.scss";
          @import "material-design-icons-iconfont/dist/material-design-icons";
        `
      }
    }
  }
})
