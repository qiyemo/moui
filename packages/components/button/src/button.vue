<!--
 * @Author: qiye
 * @Date: 2021-10-19 17:24:37
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 17:26:08
 * @Description: file content
-->
<template>
  <button
    :class="[
      'el-button',
      buttonType ? 'el-button--' + buttonType : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, inject, defineComponent } from 'vue'
import { useFormItem } from '../../../hooks'
import { elButtonGroupKey, elFormKey } from '../../../tokens'

import { buttonEmits, buttonProps } from './button'
export default defineComponent({
  name: 'MoButton',

  props: buttonProps,
  emits: buttonEmits,

  setup(props, { emit }) {
    const elBtnGroup = inject(elButtonGroupKey, undefined)
    const { size: buttonSize, disabled: buttonDisabled } = useFormItem({
      size: computed(() => elBtnGroup?.size),
    })
    const buttonType = computed(
      () => props.type || elBtnGroup?.type || 'default'
    )

    const elForm = inject(elFormKey, undefined)

    const handleClick = (evt: MouseEvent) => {
      if (props.nativeType === 'reset') {
        elForm?.resetFields()
      }
      emit('click', evt)
    }

    return {
      buttonSize,
      buttonType,
      buttonDisabled,

      handleClick,
    }
  },
})
</script>
