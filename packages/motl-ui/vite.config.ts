import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持 tsx 组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source 文件
    brotliSize: true, // 生成压缩大小报告
    lib: {
      entry: "./src/entry.ts",
      name: "MoUI",
      fileName: "motl-ui",
      // 导出模块类型
      formats: ["esm", "umd", "iife"],
    },
    outDir: "dist",
    // cssCodeSplit: true,
  },
});
