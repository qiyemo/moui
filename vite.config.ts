import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
const resolve = (dir: string) => path.join(__dirname, dir)
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
     
    } 

  },
  server: {
    host:'0.0.0.0'
  }
})
