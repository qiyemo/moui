<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 09:27:36
 * @FilePath: \moui\play\view\border\index.vue
 * @LastEditTime: 2022-06-22 11:09:32
 * @LastEditors: JESS
-->
<template>
    <div class="">
        <h1>type属性：</h1>
        <div class="btn">
            <m-border>默认（无边框）</m-border>
            <m-border type="solid">实线</m-border>
            <m-border type="dashed">虚线</m-border>
        </div>
        <h1>radius属性：</h1>
        <div class="btn">
            <m-border>默认（无圆角）</m-border>
            <m-border radius="small">small</m-border>
            <m-border radius="large">large</m-border>
            <m-border radius="round">round</m-border>
        </div>
        <h1>shadow属性：</h1>
        <div class="btn">
            <m-border>默认（无阴影）</m-border>
            <m-border shadow="basic">basic</m-border>
            <m-border shadow="light">light</m-border>
            <m-border shadow="dark">dark</m-border>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.btn {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .mBorder {
        margin-right: 20px;
    }
}
</style>