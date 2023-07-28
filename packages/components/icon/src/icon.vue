<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-07-26 17:52:44
 * @LastEditTime: 2023-07-28 15:34:37
-->
<template>
  <div class="content">
    <i :class="bem.b()" :style="style">
      <slot></slot>
    </i>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@moui/hooks';
import type { CSSProperties } from 'vue';
import { computed } from 'vue';
import { iconProps } from './icon';

const bem = useNamespace('icon');
const props = defineProps(iconProps);
defineOptions({
  name: 'MoIcon'
});

const isUndefined = (value: any): boolean => value === undefined;
const addUnit = (value: any): string => {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px`;
};

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {};
  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color
  };
});
</script>
