<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-20 14:00:23
 * @FilePath: \moui\packages\components\input\src\index.vue
 * @LastEditTime: 2022-06-22 17:25:46
 * @LastEditors: JESS
-->
<template>
  <div :class="`m-input-${props.labelPosition}`" class="m-input">
    <label for="label" type=""
      :style="{ width: labelWidth, height: labelHeight, lineHeight: labelHeight, textAlign: props.labelPosition }">
      <slot />
    </label>
    <input id="label" :type="props.type" :value="props.value" :maxlength="props.maxlength"
      :placeholder="props.placeholder" :disabled="props.disabled" :style="{ width: widthValue, height: heightValue }" />
  </div>
</template>
// 组件命名
<script lang="ts">
export default { name: 'MInput' };
</script>
// 逻辑处理
<script setup lang="ts">
import { defineProps, computed, onMounted } from 'vue'
const props = defineProps({
  //label宽度
  labelWv: {
    type: [Number, String],
    default: 100
  },
  //label高度
  labelHv: {
    type: [Number, String],
    default: 30
  },
  //label位置
  labelPosition: {
    type: String,
    default: 'top'
  },
  // 输入框类型
  type: {
    type: String,
    default: 'text'
  },
  // 输入框默认值
  value: {
    type: [String, Number],
    default: ''
  },
  // 输入框最大长度
  maxlength: {
    type: Number,
    default: ''
  },
  // 输入框最短长度
  minlength: {
    type: Number,
    default: ''
  },
  // 是否显示输入字数统计
  showWordLimit: {
    type: Boolean,
    default: false
  },
  // 输入框占位文本
  placeholder: {
    type: String,
    default: ''
  },
  //是否可清空
  clearable: {
    type: Boolean,
    default: true
  },
  //是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  //input宽度
  width: {
    type: [Number, String],
    default: '100%'
  },
  //input高度
  height: {
    type: [Number, String],
    default: 30
  }
})
// 计算 label宽度
const labelWidth = computed(() => {
  if (typeof props.labelWv === 'number') {
    return `${props.labelWv}px`
  }
  if (typeof props.labelWv === 'string') {
    return props.labelWv
  }
})
// 计算 label高度
const labelHeight = computed(() => {
  if (typeof props.labelHv === 'number') {
    return `${props.labelHv}px`
  }
  if (typeof props.labelHv === 'string') {
    return props.labelHv
  }
})
// 计算 input宽度
const widthValue = computed(() => {
  if (typeof props.width === 'number') {
    return `${props.width}px`
  }
  if (typeof props.width === 'string') {
    return props.width
  }
})
// 计算 input高度
const heightValue = computed(() => {
  if (typeof props.height === 'number') {
    return `${props.height}px`
  }
  if (typeof props.height === 'string') {
    return props.height
  }
})

</script>
<style lang="sass" scoped>
@import '../style/index.css'
</style>
