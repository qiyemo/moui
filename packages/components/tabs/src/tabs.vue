<!--
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-05-31 15:29:17
 * @LastEditTime: 2022-06-20 19:18:15
-->
<template>
  <div class="mTabs">
    <div class="tabs_box">
      <div class="tabs_pane" ref="pane">
        <template v-if="props.data.length > 0">
          <div class="pane" v-for="(item, index) in props.data" :key="index"
            :class="activePaneIndex == index ? 'active_panes' : ''" @click="change(index)">
            {{ item.title }}
          </div>
        </template>
        <template v-else>
          <slot name="pane" @handle="handle"></slot>
        </template>
      </div>
      <div class="tabs_nav">
        <template v-if="props.data.length > 0">
          <div v-for="(item, index) in props.data" :key="index" v-show="activePaneIndex == index">
            {{ item.content }}
          </div>
        </template>
        <template v-else>
          <slot name="nav" />
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MTabs',
}
</script>
<script lang="ts" setup>
import { defineProps, onMounted, ref, } from 'vue';
const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})
// 当前选中tabs的索引
const activePaneIndex = ref(0)
// 当前tabs改变时
const change = (index: number) => {
  activePaneIndex.value = index
}
// refs值 pane
const pane = ref('pane')
// 查看 pane 的子节点
const paneChild = () => {

  // console.log('pane', pane.value.children)
}
// handle
const handle = (val) => {
  console.log('handle', val)
}
onMounted(() => {
  //初始化第一个选中
  change(activePaneIndex.value)
  paneChild()
})
</script>

<style scoped lang="scss">
@import '../style/index.css';

.tabs_pane .pane {
  padding: 20px;
  border: 1px solid red;
}
</style>