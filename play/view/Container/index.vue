<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 09:27:56
 * @FilePath: \moui\play\view\container\index.vue
 * @LastEditTime: 2022-06-22 12:22:30
 * @LastEditors: JESS
-->
<template>
    <div>
        <h1>type属性值</h1>
        <ul>
            <li>type值为 default </li>
        </ul>
        <div class="box" type="default">
            <m-container>
                <template #sider>
                    <div class="card">卡片头</div>
                </template>
                <template #header>
                    <div>头</div>
                </template>
                <template #main>
                    <div>主题</div>
                </template>
                <template #footer>
                    <div>底部</div>
                </template>
            </m-container>
        </div>
        <ul>
            <li>type值为 primary </li>
        </ul>
        <div class="box">
            <m-container type="primary">
                <template #sider>
                    <div class="card">卡片头</div>
                </template>
                <template #header>
                    <div>头</div>
                </template>
                <template #main>
                    <div>主题</div>
                </template>
                <template #footer>
                    <div>底部</div>
                </template>
            </m-container>
        </div>

    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.box {
    height: 400px;
}
</style>