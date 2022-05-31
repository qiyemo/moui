<!--
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-31 16:05:24
 * @LastEditTime: 2022-05-31 18:17:45
-->
<template>
  <div class="pageination">
    <button>上一页</button>
    <button>1</button>
    <button>...</button>
    <button class="disabled">3</button>
    <button>4</button>
    <button class="active">5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>...</button>
    <button class="disabled">12</button>
    <button>下一页</button>
    <button class="disabled">共 20 条</button>
  </div>
</template>
<script lang="ts">
export default { name: 'MPagenation' };
</script>
<script lang="ts" setup>
import { defineProps, onMounted, computed } from 'vue';
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  showPageNo: {
    type: Number,
    default: 5,
    validator: function (value) {
      return value % 2 === 1;
    },
  },
})
const myCurrentPage = props.currentPage;
onMounted(() => {
  console.log(111)
})

const totalPage = computed(() => {
  const { total, pageSize } = props;
  return Math.ceil(total / pageSize);
})

const startEnd = computed(() => {
  // 获取计算依赖项
  const { myCurrentPage, showPageNo, totalPage } = props;
  let start, end;
  /**
   * 起始页码就是用当前页码减去最大连续页码除以2并向下取整的结果。
   * 如：showPageNo=3，当前页是4，那么起始页码就应该是3，4- Math.floor(3/ 2)=4-1=3
   * 当然start是有边界的，当他小于一了就强制变成1
   */
  start = myCurrentPage - Math.floor(showPageNo / 2);
  if (start < 1) {
    start = 1
  }

  /**
   * 结束页码就可以利用起始页码进行计算
   */
  end = start + showPageNo - 1

  /**
   * 结束页码的边界值就是当他超过总页数
   * 如：总页数为10，当前页是9，最大连续页码是5，
   * 这时候算出来的start = 9 - 2 = 7，end = 7 + 5 -1 = 11 > 10, 所以需要修正
   * end修正之后，start和end的间距就不是设置的showPageNo 了，
   * start也要修改，使用end反推start，start = end - showPageNo 这样子多剪了一个1，后面还要加上，同样的，要对边界值判断
   */
  if (end > totalPage) {
    // 修改end为totalPage
    end = totalPage
    // reset start
    start = end - showPageNo + 1
    if (start < 1) {
      start = 1
    }
  }
  return { start, end };
})
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