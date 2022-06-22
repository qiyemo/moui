<!--
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-05-31 09:13:08
 * @LastEditTime: 2022-06-22 10:43:45
-->

<template>
  <div class="mBorder" :class='[`mBorder-${type}`, `mBorder-radius-${radius}`, `mBorder-shadow-${shadow}`]'>
    <span>
      <slot></slot>
    </span>
  </div>
</template>


<script lang="ts">
export default {
  //组件名
  name: 'MBorder',
};
</script>
<script setup lang="ts">

import { defineProps, onMounted } from 'vue';
defineProps({
  type: {
    type: String,
    default: 'solid'
  },
  radius: {
    type: String,
    default: 'none'
  },
  shadow: {
    type: String,
    default: 'none'
  },
})
</script>
<style scoped lang="scss">
@import '../style/index.scss';
</style>
