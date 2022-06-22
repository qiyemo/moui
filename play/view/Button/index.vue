<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 09:27:39
 * @FilePath: \moui\play\view\button\index.vue
 * @LastEditTime: 2022-06-22 11:22:56
 * @LastEditors: JESS
-->
<template>
    <div class="">
        <h1>type属性：</h1>
        <div class="btn">
            <m-button>默认</m-button>
            <m-button type="success">success</m-button>
            <m-button type="error">error</m-button>
            <m-button type="warning">warning</m-button>
            <m-button type="info">info</m-button>
        </div>
        <h1>plan属性：true</h1>
        <div class="btn">
            <m-button plan="true">默认</m-button>
            <m-button type="success" plan="true">success</m-button>
            <m-button type="error" plan="true">error</m-button>
            <m-button type="warning" plan="true">warning</m-button>
            <m-button type="info" plan="true">info</m-button>
        </div>
        <h1>round属性：true</h1>
        <div class="btn">
            <m-button round="true">默认</m-button>
            <m-button type="success" round="true">success</m-button>
            <m-button type="error" round="true">error</m-button>
            <m-button type="warning" round="true">warning</m-button>
            <m-button type="info" round="true">info</m-button>
        </div>
        <h1>circle属性：true</h1>
        <div class="btn">
            <m-button type="info" circle="true">info</m-button>
        </div>
        <h1>disabled属性：true</h1>
        <div class="btn">
            <m-button disabled="true">默认</m-button>
            <m-button type="success" disabled="true">success</m-button>
            <m-button type="error" disabled="true">error</m-button>
            <m-button type="warning" disabled="true">warning</m-button>
            <m-button type="info" disabled="true">info</m-button>
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

    .mButton {
        margin-right: 20px;
    }
}
</style>