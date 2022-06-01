<!--
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-06-01 14:51:02
 * @LastEditTime: 2022-06-01 14:51:33
-->
<template>
  <div class="tab-group">
    <!-- tabRef 这块本来是用来实现下划线动态切换特效的，暂时没有写效果 -->
    <div ref="barRef" class="tab-bar" :style="{ width: widthRef + 'px' }"></div>
    <div ref="titsRef" class="tab-header" layout="row" layout-wrap>
      <div
        ref="titRef"
        :class="[{ active: activeKey == item.props.actKey }, 'tab-nav']"
        v-for="(item, index) in tabTitLists"
        :key="item"
        @click="onTabClick($event, item, index)"
      >
        {{ item.props.label }}
      </div>
    </div>
    <div class="tab-panel">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, provide } from "vue";
export default {
  props: {
    defaultKey: {
      type: String,
      default: "1",
    },
  },
  setup(props, context) {
    const tabTitLists = context.slots.default();
    let activeKey = ref(props.defaultKey); //当前key
    provide("activeKey", activeKey);

    const barRef = ref(null);
    const titRef = ref(null);
    let widthRef = ref();
    onMounted(() => {
      // 设置状态线初始化宽度
      widthRef.value = titRef.value.clientWidth;
    });
    function onTabClick(event, tab, index) {
      activeKey.value = tab.props.actKey;
    }
    return {
      tabTitLists,
      barRef,
      titRef,
      widthRef,
      onTabClick,
      activeKey,
    };
  },
};
</script>
<style scoped lang="less">
.tab-group {
  // .tab-bar {
  //   position: absolute;
  //   left: 0;
  //   border-bottom: 2px solid #409eff;
  // }
  .tab-header {
    &:after {
      content: "";
      width: 100%;
      border-bottom: 2px solid #ddd;
    }
  }
  .tab-nav {
    color: #5c5c5c;
    font-size: 14px;
    line-height: 40px;
    display: inline-block;
    margin-right: 3em;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &.active {
      color: #2f5cd5;
      border-bottom-color: #2f5cd5;
    }
  }
  .tab-panel{
    padding: 15px;
  }
}
</style>