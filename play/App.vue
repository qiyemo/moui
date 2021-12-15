<script setup lang="ts">
import ThemeSelector from './components/theme-selector.vue';
</script>

<template>
  <div>
    <m-card>
      <template #header>
        <div>卡片头</div>
      </template>
      <div>卡片内容</div>
    </m-card>
    <ThemeSelector></ThemeSelector>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
