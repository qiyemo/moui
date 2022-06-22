<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-20 14:00:23
 * @FilePath: \moui\packages\components\card\src\card.vue
 * @LastEditTime: 2022-06-22 10:46:52
 * @LastEditors: JESS
-->
<script lang="ts">
export default { name: 'MCard' };
</script>
<script setup lang="ts">
const bodyStyle: any = {};
</script>
<template>
  <div class="m-card">
    <div class="m-card__header font--title3">
      <slot></slot>
    </div>
    <div class="m-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="sass" scoped>
@import '../style/index.css'
</style>
