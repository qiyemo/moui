<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 09:28:12
 * @FilePath: \moui\play\view\pagenation\index.vue
 * @LastEditTime: 2022-06-22 11:46:21
 * @LastEditors: JESS
-->
<template>
    <div class="">
        <h3>属性：</h3>
        <ul>
            <li>currentPage（类型）：number （默认1）</li>
            <li>total（数据总数）：number</li>
            <li>pageSize（每页数据数量）：number</li>
            <li>showPageNo（分页两个省略号之间的值数量）：number</li>
            <li>currentChange（点击分页的上、下一页的按钮，以及具体分页的回调）：function（val => val参数（页码）</li>
        </ul>
        <h3>当前页面展示数据：</h3>
        <ul>
            <li>currentPage: 10</li>
            <li>total: 300</li>
            <li>pageSize: 10</li>
            <li>showPageNo: 5</li>
            <li>currentChange: (value) => { console.log(value), page.currentPage = value }</li>
        </ul>
        <m-pagenation :currentPage="page.currentPage" :total="page.total" :pageSize="page.pageSize"
            :showPageNo="page.showPageNo" @currentChange="page.currentChange"></m-pagenation>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

interface Page {
    currentPage: number // 当前页
    total: number // 总数
    pageSize: number // 每页数据
    showPageNo: number// 条目选择
    currentChange: any
}
const page: Page = reactive(
    {
        currentPage: 10,
        total: 300,
        pageSize: 10,
        showPageNo: 5,
        currentChange: (value) => { console.log(value), page.currentPage = value }
    }
)
</script>

<style scoped lang="scss">
</style>