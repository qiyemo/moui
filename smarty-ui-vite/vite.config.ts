import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Unocss from './config/unocss';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
};

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持 tsx 组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'MoUI',
      fileName: 'mo-ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife']
    },
    cssCodeSplit: true
  }
});
