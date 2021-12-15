<script setup lang="ts">
import { ref } from 'vue';

const themeOptions = ref<string[]>(['geekblue', 'lime', 'magenta', 'orange']);

const initTheme = (themeName: string) => {
  console.log('initTheme ', themeName);
  let style: any = document.querySelector('style[data-type="theme"]');
  if (!style) {
    style = document.createElement('style');
    style.dataset.type = 'theme';
  }
  style.innerHTML = `@import url(./theme/${themeName}.css)`;
  const head: any = document.querySelector('head');
  head.append(style);
};

const handleThemeChange = (event: any) => {
  console.log('handleThemeChange ', event);
  const tar = themeOptions.value[event.target.options.selectedIndex];
  initTheme(tar);
};
</script>
<template>
  <select @change="handleThemeChange">
    <option v-for="option in themeOptions" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>
<style></style>
