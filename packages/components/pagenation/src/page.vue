<!--
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-31 16:05:24
 * @LastEditTime: 2022-06-01 13:42:47
-->
<template>
  <div class="pageination">
    <button :class="{ disabled: currentPage === 1 }" @click="changePage(false)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="changePage(1)">1</button>
    <button v-if="startNumAndEndNum.start > 2">...</button>
    <button v-for="(item, index) in startNumAndEndNum.end" :key="index" :class="{ active: currentPage === item }" v-show="item >= startNumAndEndNum.start" @click="changePage(item)">
      {{ item }}
    </button>
    <button v-if="startNumAndEndNum.end < pages - 1">...</button>
    <button v-if="startNumAndEndNum.end < pages" @click="changePage(pages)">{{ pages }}</button>
    <button :class="{ disabled: currentPage === pages }" @click="changePage(true)">下一页</button>
    <button>共 {{ total }} 条</button>
  </div>
</template>
<script lang="ts">
export default { name: 'MPagenation' };
</script>
<script lang="ts" setup>
import { defineProps, onMounted, computed, ref, defineEmits } from 'vue';
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  showPageNo: {
    type: Number,
    default: 5,
    validator: function (value) {
      return value % 2 === 1;
    }
  }
});
// 总页数
const pages = computed(() => Math.ceil(props.total / props.pageSize));
// 当前页码
// console.log(attrs.page)
const currentPageVal = ref(props.currentPage || 1);

// 计算出连续的页码的起始数字与结束数字【连续页码的数字：至少是5】
const startNumAndEndNum = computed(() => {
  const { showPageNo, currentPage } = props;
  // 起始数字、结束数字
  let start = 0;
  let end = 0;

  // 连续页码数字为5，不正常现象————totalPage不够5页
  if (showPageNo > pages.value) {
    start = 1;
    end = pages.value;
  } else {
    // 正常现象
    start = currentPage - parseInt(showPageNo / 2);
    end = currentPage + parseInt(showPageNo / 2);

    // 【start出现0或负数】
    if (start < 1) {
      start = 1;
      end = showPageNo;
    }
    // 【end大于totalPage】
    if (end > pages.value) {
      end = pages.value;
      start = pages.value - showPageNo + 1;
    }
  }
  return { start, end };
});
// 控制上一页和下一页变化
const emit = defineEmits(['currentChange']);
const changePage = (type) => {
  if (type === false) {
    // 上一页
    // 页面是第一页时，禁止点击操作
    if (currentPageVal.value === 1) return;
    if (currentPageVal.value > 1) {
      currentPageVal.value -= 1;
    }
  } else if (type === true) {
    // 下一页
    // 页面是最后页时，禁止点击操作
    if (currentPageVal.value === pages.value) return;
    if (currentPageVal.value < pages.value) {
      currentPageVal.value += 1;
    }
  } else {
    // 点击页码
    currentPageVal.value = type;
  }
  emit('currentChange', currentPageVal.value);
  return { currentPageVal, pages, changePage };
};
onMounted(() => {
  console.log(props);
});
</script>
 
<style lang="scss" scoped>
.pageination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    pad: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &.active {
      background-color: #409eff;
      color: #fff;
      cursor: not-allowed;
    }

    &.disabled {
      cursor: not-allowed;
      color: #ccc;
    }
  }
}
</style>