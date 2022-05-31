<!--
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-31 09:13:08
 * @LastEditTime: 2022-05-31 10:53:06
-->

<template>
  <div class="mBorder" :class='[`mBorder-${type}`, `mBorder-radius-${radius}`, `mBorder-shadow-${shadow}`]'>
    <span>
      <slot></slot>
    </span>
  </div>
</template>


<script lang="ts">
export default {
  //组件名
  name: 'MBorder',
};
</script>
<script setup lang="ts">
import {defineProps, onMounted} from 'vue';
defineProps({
  type: {
    type: String,
    default: 'solid'
  },
  radius: {
    type: String,
    default: 'none'
  },
  shadow: {
    type: String,
    default: 'none'
  },
})
</script>
<style scoped lang="scss">
  .mBorder {
    padding: 8px 16px;
    height: 20px;
  }
  // solid
  .mBorder-solid {
      border: 1px solid #ccc;
  }
  // dashed
  .mBorder-dashed {
    border: 1px dashed #409eff;
  }

  // none
  .mBorder-none {
    border: none;
  }

  // 设置圆角

  // none
  .mBorder-radius-none {
    border-radius: 0px;
  }

  // small
  .mBorder-radius-small {
    border-radius: 4px;
  }

  // large
  .mBorder-radius-large {
    border-radius: 8px;
  }
  // round
  .mBorder-radius-round {
    border-radius: 20px;
  }
  
  //设置阴影
  .mBorder-shadow-none {
    box-shadow: none;
  }

  .mBorder-shadow-basic {
    box-shadow: 0px 12px 32px 4px rgb(221, 217, 217);
  }

  .mBorder-shadow-light {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
  }

  .mBorder-shadow-dark {
    box-shadow: 0px 16px 18px 16px rgba(0, 0, 0, .35);
  }
</style>
