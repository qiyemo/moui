<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 09:28:38
 * @FilePath: \moui\play\view\tabs\index.vue
 * @LastEditTime: 2022-06-22 11:57:32
 * @LastEditors: JESS
-->
<template>
    <div class="">
        <h1>m-tabs</h1>
        <ul>
            <li>
                <h3>value： 选项卡默认展示项【name属性的值】----（string）： 默认为“ ”；</h3>
            </li>
            <li>
                <h3>stretch： 选项卡按钮是否自动撑开 -----（boolean）: 默认为 false; </h3>
            </li>
            <li>
                <h3>closable: 选项卡是否显示可取消按钮 ----- （boolean）: 默认为 false;</h3>
            </li>
            <li>
                <h3>type： 选项卡的风格类型 ---- （string） ： 默认为“ ” , 其他值（border-card）；</h3>
            </li>
        </ul>
        <h1>m-tabs-pane</h1>
        <ul>
            <li>
                <h3>label： 选项卡标题 ----（string）： 默认为“ ”；</h3>
            </li>
            <li>
                <h3>name： 与选项卡按钮绑定值且与value对应的值，表示选项卡别名 -----（string）: 默认为“ ”; </h3>
            </li>
            <li>
                <h3>disabled: 选项卡是否禁用 ----- （boolean）: 默认为 false;</h3>
            </li>
        </ul>
        <m-tabs value="first" type="border-card" stretch closable label="1wwwww">
            <m-tabs-pane label="用户管理" name="first">用户管理的模块区域</m-tabs-pane>
            <m-tabs-pane label="配置管理" name="second">
                配置管理的模块区域
            </m-tabs-pane>
            <m-tabs-pane label="角色管理" name="third">角色管理的模块区域</m-tabs-pane>
            <m-tabs-pane label="定时任务补偿" name="fourth">定时任务补偿的模块区域</m-tabs-pane>
        </m-tabs>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
</style>