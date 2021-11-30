<template>
<div class="m-card">
  <div class="m-card__header font--title3">
    <slot name="header"></slot>
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
<style lang="scss">
.m-card{
  box-sizing: border-box;
  border-radius: var(--border-radius-small);
  box-shadow: var(--border-shadow-light);
  border-color: var(--color-border-light);
  border-style: solid;
  border-width: 1px;
}
.m-card .m-card__header, .m-card .m-card__body{
  padding: var(--spacing-middle);
}
.m-card .m-card__header{
  border-bottom: solid 1px var(--color-border-light);
}
.m-card .m-card__body{

}
</style>

