
<template>
  <div class="mButton" :class='[`mButton-${type}`, { "mButton_is-plain": plain}, {"mButton_is-round": round} , {"mButton_is-circle": circle} , {"mButton_is-disabled": disabled}]'>
    <span>
      <slot></slot>
    </span>
  </div>
</template>


<script lang="ts">
export default {
  //组件名
  name: 'MButton',
};
</script>
<script setup lang="ts">
import {defineProps, onMounted} from 'vue';
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="scss">
  .mButton {
    padding: 8px 16px;
  }
  .mButton_is-plain {
      color: #fff;
      background-color:  #409eff;
      border: 1px solid #409eff;
  }
  
  // primary
  .mButton-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    margin-left: 20px;
  
    &:hover,
    &:focus {
      background: #66b1ff;
      background-color: #66b1ff;
      color: #fff;
    }
  }

  // success
    .mButton-success {
    color: #fff;
    background-color: #82e757;
    border-color: #4c8a24;
    margin-left: 20px;
  
    &:hover,
    &:focus {
      background-color: #4cc419;
      color: #fff;
    }
  }

  // error
    .mButton-error {
    color: #fff;
    background-color: #f36b6e;
    border-color: #ee4c4e;
    margin-left: 20px;
  
    &:hover,
    &:focus {
      background-color: #db3335;
      color: #fff;
    }
  }
  
  // warning
  .mButton-warning {
    color: #fff;
    background-color: #e5a145;
    border-color: #eca036;
    margin-left: 20px;
  
    &:hover,
    &:focus {
      background: #e7931c;
      background-color: #e7931c;
      color: #fff;
    }
  }

  // info
  .mButton-info {
    color: #fff;
    background-color: #4e4e4d;
    border-color: #313131;
    margin-left: 20px;
  
    &:hover,
    &:focus {
      background: #2e2e2b;
      background-color: #2e2e2b;
      color: #fff;
    }
  }
  
  // 设置圆角
  .mButton_is-round {
    border-radius: 8px;
  }
  
  // 设置圆形
  .mButton_is-circle {
    border-radius: 50%;
    padding: 16px;
  }
  
  //设置disabled
  .mButton_is-disabled {
    cursor: no-drop;
    background-color: #c0c0c0;
    &:hover,
    &:focus {
      background-color: #c0c0c0;
      color: #fff;
    }
  }
</style>
