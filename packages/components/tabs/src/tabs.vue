<!--
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-31 15:29:17
 * @LastEditTime: 2022-05-31 15:41:53
-->
<template>
    <div class="mTag">
        <span v-for="(item, index) in tabsList" :key="index" @click="handle"></span>
    </div>
</template>
 
<script lang="ts" setup>
const tabsList = [{
    name: "标签1",
    value: 1
},{
    name: "标签2",
    value: 2
},{
    name: "标签3",
    value: 3
}]

const handle = (val) => {
    console.log(val'被点击！')
}
</script>
 
<style scoped>
.mTabs {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>