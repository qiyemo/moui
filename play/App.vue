<!--
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-30 14:21:00
 * @LastEditTime: 2022-05-31 18:06:47
-->
<script setup lang="ts">
import ThemeSelector from './components/theme-selector.vue';
const page = {
  currentPage: 1,
  total: 200,
  pageSize: 10,
  showPageNo: 5,
  currentChange: () => {
    console.log('123')
  },
}
</script>
<template>
  <div>
    <!-- <m-card>
      <template #header>
        <div>卡片头</div>
      </template>
      <div>卡片内容</div>
    </m-card> -->
    <!-- <m-container type="primary">
      <template #sider>
        <div class="card">卡片头</div>
      </template>
      <template #header>
        <div>头</div>
      </template>
      <template #main>
        <div>主题</div>
      </template>
      <template #footer>
        <div>底部</div>
      </template>
    </m-container> -->
    <!-- <ThemeSelector></ThemeSelector> -->
    <m-pagenation
      :currentPage="page.currentPage"
      :total="page.total"
      :pageSize="page.pageSize"
      :showPageNo="page.showPageNo"
      @currentChange="page.currentChange"
    ></m-pagenation>
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
  padding: 10px 20px;
}
</style>
