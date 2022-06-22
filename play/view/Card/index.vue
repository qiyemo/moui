<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 09:26:41
 * @FilePath: \moui\play\view\card\index.vue
 * @LastEditTime: 2022-06-22 09:56:24
 * @LastEditors: JESS
-->
<template>
    <div class="card">
        卡片
        <m-card>
            <template #header>
                <div>卡片头</div>
            </template>
            <div>卡片内容</div>
        </m-card>
    </div>
</template>

<script lang="ts" setup>
import ThemeSelector from '../../components/theme-selector.vue';
</script>

<style scoped lang="scss">
</style>
