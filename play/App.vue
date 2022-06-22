<!--
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-05-30 14:21:00
 * @LastEditTime: 2022-06-22 12:25:22
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

let routeList = ref([]);
let route = useRouter();
onMounted(() => {
  routeList.value = route.options.routes
})
const routeChange = (item) => {
  route.push({ path: `${item.path}` })
}
</script>
<template>
  <div id="app">
    <!-- <ThemeSelector></ThemeSelector> -->
    <div class="layout">
      <template v-for="(item, index) in routeList">
        <m-button class="btn" type="info" :key="index" @click="routeChange(item)" v-if="index > 0">
          {{
              item.name
          }}
        </m-button>
      </template>
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 50px;
}

.layout {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

  .btn {
    flex: 1;
    text-align: center;
    margin: 0 20px 20px 0; // 间隙为20px
    // padding-top: 20px;
    border: 1px solid #888;
    box-sizing: border-box;

    width: calc((100% - 60px) / 4); // 我这里一行显示4个 所以是/4  一行显示几个就除以几
    // 这里的60px = (分布个数4-1)*间隙20px, 可以根据实际的分布个数和间隙区调整
    min-width: calc((100% - 60px) / 10);
    max-width: calc((100% - 60px) / 10);

    &:nth-child(10n + 10) {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
