<!--
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-05-30 14:21:00
 * @LastEditTime: 2022-06-21 18:24:56
-->
<script setup lang="ts">
import { reactive, ref, } from '@vue/reactivity';
// import ThemeSelector from './components/theme-selector.vue';
const myName = ref('first')


const handle = (val) => {

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
    <!-- <m-pagenation :currentPage="page.currentPage" :total="page.total" :pageSize="page.pageSize"
      :showPageNo="page.showPageNo" @currentChange="page.currentChange"></m-pagenation> -->
    <!-- <m-tabs :data="data"></m-tabs> -->
    <m-tabs :value="myName" type="border-card" stretch closable label="1wwwww">
      <m-tabs-pane label="用户管理" name="first">用户管理的模块区域</m-tabs-pane>
      <m-tabs-pane label="配置管理" name="second">
        配置管理的模块区域
      </m-tabs-pane>
      <m-tabs-pane label="角色管理" name="third">角色管理的模块区域</m-tabs-pane>
      <m-tabs-pane label="定时任务补偿" name="fourth">定时任务补偿的模块区域</m-tabs-pane>
    </m-tabs>
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
