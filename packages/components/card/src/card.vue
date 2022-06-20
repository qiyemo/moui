<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-20 14:00:23
 * @FilePath: \moui\packages\components\card\src\card.vue
 * @LastEditTime: 2022-06-20 17:44:32
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
<style>
.m-card {
  box-sizing: border-box;
  border-radius: var(--border-radius-small);
  box-shadow: var(--border-shadow-light);
  border-color: var(--color-border-light);
  border-style: solid;
  border-width: 1px;
}

.m-card__header,
.m-card__body {
  padding: var(--spacing-middle);
  color: var(--color-primary);
}

.m-card__header {
  border-bottom: solid 1px var(--color-border-light);
}

.m-card__body {}

.m-card-small {}
</style>
