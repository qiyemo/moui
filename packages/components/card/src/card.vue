<template>
<div class="m-card">
  <div class="m-card__header" style="color: red;">
    <slot name="header">卡片头</slot>
  </div>
  <div class="m-card__body" :style="bodyStyle">
    <slot></slot>
  </div>
</div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {cardProps} from './card';

export default defineComponent({
  name: 'MCard',
  props: cardProps
});
</script>

