<script setup lang="ts">
import { ref } from 'vue';

const themeOptions = ref<string[]>(['geekblue', 'lime', 'magenta', 'orange']);
const theme = ref('');

const initTheme = (themeName: string) => {
  let style: any = document.querySelector('style[data-type="theme"]');
  if (!style) {
    style = document.createElement('style');
    style.dataset.type = 'theme';
  }
  style.innerHTML = `@import url(./theme/${themeName}.css)`;
  const head: any = document.querySelector('head');
  head.appendChild(style);
};

const handleThemeChange = (themeName: string) => {
  initTheme(themeName);
};
</script>
<template>
  <el-select v-model="theme" @change="handleThemeChange">
    <el-option
      v-for="option in themeOptions"
      :key="option"
      :value="option"
      :label="option"
    ></el-option>
  </el-select>
</template>
<style></style>
