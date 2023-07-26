<template>
  <i :class="bem.b()">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { useNamespace } from '@moui/hooks';

const bem = useNamespace('icon');
</script>
