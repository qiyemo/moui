/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-05-23 14:32:49
 * @LastEditTime: 2023-05-24 10:40:32
 */
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [vueJsx()]
});
