<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-02 16:52:59
 * @LastEditTime: 2023-08-02 18:35:28
-->
<script setup lang="ts">
import { reactive } from 'vue';
import MoSheet from '@moui/components/luckysheet';

defineOptions({
  name: 'MoApprovePrint'
});

/** 左侧选项栏 start */
const leftState = reactive<any>({
  activeName: 'sys',
  fields: {
    form: [],
    sys: [
      { label: '申请人' },
      { label: '申请人部门' },
      { label: '申请时间' },
      { label: '打印人' },
      { label: '打印时间' },
      { label: '审批编号' },
      { label: '单据类型' },
      { label: '公司名称' }
      // {name: '二维码'},
      // {name: '申请人'},
      // {name: '申请人'},
      // {name: '申请人'},
    ]
  }
});
const leftMethods = {
  handleClick: (key: string) => {
    console.info(key);
  }
};
/** 左侧选项栏 end */
</script>
<template>
  <div class="approve-print">
    <div class="approve-print__left">
      <div class="tabs">
        <el-tabs v-model="leftState.activeName" @tab-click="leftMethods.handleClick">
          <el-tab-pane label="表单字段" name="form"></el-tab-pane>
          <el-tab-pane label="系统字段" name="sys"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="fields-box">
        <div v-for="item in leftState.fields['sys']" :key="item.label" class="fields-box__button">
          <el-button class="block-button"
            >{{ item.label }}
            <template #icon>
              <el-icon><Document /></el-icon>
            </template>
          </el-button>
        </div>
      </div>
    </div>
    <div class="approve-print__content">
      <MoSheet></MoSheet>
    </div>
  </div>
</template>
<style scoped>
.approve-print {
  display: flex;
  padding: 16px;
}
.approve-print__left {
  flex-basis: 250px;
  flex-grow: 0;
  flex-shrink: 0;
  padding-right: 16px;
}
.approve-print__content {
  flex-grow: 1;
  align-self: stretch;
  /* height: 100%; */
}

.fields-box__button + .fields-box__button {
  margin-top: 16px;
}
.fields-box__button .block-button {
  width: 100%;
}

.fields-box {
  /* display: flex; */
}
</style>
