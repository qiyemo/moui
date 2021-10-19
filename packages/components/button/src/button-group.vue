<!--
 * @Author: qiye
 * @Date: 2021-10-19 16:38:17
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 16:43:13
 * @Description: file content
-->
<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRef } from 'vue'
import { elButtonGroupKey } from '../../../tokens';
import { buttonGroupProps } from './button-group'
export default defineComponent({
  name: 'ElButtonGroup',
  props: buttonGroupProps,
  setup(props) {
    provide(
      elButtonGroupKey,
      reactive({
        size: toRef(props, 'size'),
        type: toRef(props, 'type'),
      })
    )
  },
})
</script>