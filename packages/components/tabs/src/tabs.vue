<!--
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-31 15:29:17
 * @LastEditTime: 2022-06-01 14:52:26
-->
<template>
    <div class="mTabs">
    <div class="mTabs-header">
      <div
        class="mTabs-header-wrapper"
        v-if="tabsArray && tabsArray.length > 0"
      >
        <div
          v-for="tab in tabsArray"
          :key="tab.name"
          :class="`mTab-item ${activeName === tab.name ? 'is-active' : ''}`"
          @click="clickTab(tab)"
        >
          {{ tab.label }}
        </div>
      </div>
    </div>
    <div class="mTabs-body"><slot></slot></div>
  </div>
</template>
<script lang="ts">
import { reactive } from '@vue/reactivity'
import { watch } from '@vue/runtime-core';
export default { name: 'MTabs' }
</script>
<script lang="ts" setup>
let tabsArray = reactive([]);
const props = defineProps({
    value: {
        type: 'string'
    }
});
const activeName = props.value;

watch(
    () => {}
)
</script>
 
<style scoped lang="scss">
.mTabs {
  width: 100%;
  height: auto;
  .mTabs-header {
    width: 100%;
    .is-active.mTab-item {
      background-color: aquamarine;
    }
    .mTabs-header-wrapper:before {
      color: white;
    }
    .mTabs-header-wrapper {
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      height: 30px;
      padding: 1px 0;
    }
    .mTab-item {
      width: fit-content;
      height: 30px;
      padding: 0 15px;
      font-size: 14px;
      background-color: transparent;
      z-index: 49;
      cursor: pointer;
      line-height: 30px;
      border: 1px rgba(100, 100, 100, 0.1) solid;
      border-right: none;
      &:last-of-type {
        border-right: 1px rgba(100, 100, 100, 0.1) solid;
      }
    }
  }
}
.mTabs-body {
  padding: 10px 0;
  height: auto;
  background-color: transparent;
}
</style>