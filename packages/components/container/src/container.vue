<!--
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-31 09:13:08
 * @LastEditTime: 2022-05-31 15:07:47
-->

<template>
  <div :class='`mContainer-${type}`' v-if="type == 'default'">
    <div :class='`mContainer-sider-${type}`'>
      <slot name="sider"></slot>
    </div>
    <div :class='`mContainer-nav-${type}`'>
      <div :class='`mContainer-header-${type}`'>
        <slot name="header"></slot>
      </div>
      <div :class='`mContainer-main-${type}`'>
        <slot name="main"></slot>
      </div>
      <div :class='`mContainer-footer-${type}`'>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  <div :class='`mContainer-${type}`' v-if="type == 'primary'">
    <div :class='`mContainer-header-${type}`'>
      <slot name="header"></slot>
    </div>
    <div :class='`mContainer-nav-${type}`'>
      <div :class='`mContainer-sider-${type}`'>
        <slot name="sider"></slot>
      </div>
      <div :class='`mContainer-body-${type}`'>
        <div :class='`mContainer-main-${type}`'>
          <slot name="main"></slot>
        </div>
        <div :class='`mContainer-footer-${type}`'>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  //组件名
  name: 'MContainer',
};
</script>
<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  type: {
    type: String,
    default: 'defaults'
  }
})
</script>
<style scoped lang="scss">
.mContainer-default {
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
  border: 1px solid #c0c0c0;
}

.mContainer-sider-default {
  width: 10%;
  height: 100%;
  background-color: rgb(87, 206, 93);
}

.mContainer-nav-default {
  width: 100%;
  display: flex;
  flex-direction: column;

  .mContainer-header-default {
    min-height: 5%;
    background-color: rgb(84, 190, 223);
  }

  .mContainer-main-default {
    height: 100%;
    background-color: rgb(235, 118, 235);
  }

  .mContainer-footer-default {
    min-height: 5%;
    background-color: rgb(211, 106, 129);
  }
}

.mContainer-primary {
  width: 100%;
  // height: 100%;
  height: 709px;
  display: flex;
  flex-direction: column;
  color: #fff;
  border: 1px solid #c0c0c0;
}

.mContainer-header-primary {
  width: 100%;
  min-height: 5%;
  background-color: rgb(84, 190, 223);
}
.mContainer-nav-primary {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: red;
  .mContainer-sider-primary {
      width: 10%;
      height: 100%;
      background-color: rgb(87, 206, 93);
    }
  .mContainer-body-primary {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .mContainer-main-primary {
      height: 100%;
      background-color: rgb(235, 118, 235);
    }

    .mContainer-footer-primary {
      min-height: 5%;
      background-color: rgb(211, 106, 129);
    }
  }
}
</style>