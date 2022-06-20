<!--
 * @Description:tabs组件标签
 * @Author: JESS
 * @Date: 2022-06-20 14:31:08
 * @FilePath: \moui\packages\components\tabs\components\tabs-pane\index.vue
 * @LastEditTime: 2022-06-20 16:30:36
 * @LastEditors: JESS
-->
<template>
    <div class="tabs_box">
        <div class="tabs_pane">
            <template v-if="false">
                <div class="pane" v-for="(item, index) in props.data" :key="index"
                    :class="activePaneIndex == index ? 'active_panes' : ''" @click="change(index)">
                    {{ item.title }}
                </div>
            </template>
            <template v-else>
                <div class="pane">
                    <slot name="pane"></slot>
                </div>
            </template>
        </div>
        <tab-nav :data="props.data" :activePaneIndex="activePaneIndex" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from '@vue/runtime-dom';
import tabNav from '../tabs-nav/index.vue'
const props = defineProps(['data'])

</script>

<style scoped lang="scss">
@import '../../style/index.css'
</style>