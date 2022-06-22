<!--
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-05-31 09:13:08
 * @LastEditTime: 2022-06-22 12:22:47
-->

<template>
  <div class="mContainer">
    <div :class='`mContainer-${type}`' v-if="type == 'default'">
      <div :class='`mContainer-sider-${type}`'>
        <slot name="sider"></slot>
      </div>
      <div :class='`mContainer-nav-${type}`'>
        <div :class='`mContainer-header-${type}`'>
          <slot name="header"></slot>
        </div>
        <div :class='`mContainer-main-${type}`'>
          <slot name="main"></slot>
        </div>
        <div :class='`mContainer-footer-${type}`'>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div :class='`mContainer-${type}`' v-if="type == 'primary'">
      <div :class='`mContainer-header-${type}`'>
        <slot name="header"></slot>
      </div>
      <div :class='`mContainer-nav-${type}`'>
        <div :class='`mContainer-sider-${type}`'>
          <slot name="sider"></slot>
        </div>
        <div :class='`mContainer-body-${type}`'>
          <div :class='`mContainer-main-${type}`'>
            <slot name="main"></slot>
          </div>
          <div :class='`mContainer-footer-${type}`'>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  //组件名
  name: 'MContainer',
};
</script>
<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
</script>
<style scoped lang="scss">
@import '../style/index.scss'
</style>