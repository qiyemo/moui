<!--
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-05-30 14:21:00
 * @LastEditTime: 2022-06-20 19:18:33
-->
<script setup lang="ts">
import { reactive, ref,  } from '@vue/reactivity';
import ThemeSelector from './components/theme-selector.vue';
const data = ref([{
  title: '标签1',
  content: '1的内容'
}, {
  title: '标签2',
  content: '2的内容'
}, {
  title: '标签3',
  content: '3的内容'
}])

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
    <m-tabs>
      <template #pane>
        <div class="pane" name="first" @click="handle">睡觉</div>
        <div class="pane" name="second">吃饭</div>
        <div class="pane" name="fourth">打豆豆</div>
      </template>
      <template #nav>
        <div name="first">睡觉</div>
        <div name="second">吃饭</div>
        <div name="fourth">打豆豆</div>
      </template>
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
