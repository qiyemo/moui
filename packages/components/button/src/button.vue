<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-20 14:00:23
 * @FilePath: \moui\packages\components\button\src\button.vue
 * @LastEditTime: 2022-06-22 10:46:02
 * @LastEditors: JESS
-->

<template>
  <div class="mButton"
    :class='[`mButton-${type}`, { "mButton_is-plain": plain }, { "mButton_is-round": round }, { "mButton_is-circle": circle }, { "mButton_is-disabled": disabled }]'>
    <span>
      <slot></slot>
    </span>
  </div>
</template>


<script lang="ts">
export default {
  //组件名
  name: 'MButton',
};
</script>
<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="scss">
@import '../style/index.scss';
</style>
