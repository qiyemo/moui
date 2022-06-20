<!--
 * @Description: tabs组件
 * @Author: JESS
 * @Date: 2022-06-20 14:31:01
 * @FilePath: \moui\packages\components\tabs\components\tabs-nav\index.vue
 * @LastEditTime: 2022-06-20 16:30:42
 * @LastEditors: JESS
-->
<template>
    <div class="tabs_nav">
        <div v-for="(item, index) in props.data" :key="index" v-show="props.activePaneIndex == index">
            {{ item.content }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps } from '@vue/runtime-dom';
const props = defineProps({
    data: {
        type: Array,
        default: []
    }
})
const activePaneIndex = ref(0)
const change = (index: number) => {
    activePaneIndex.value = index
}
onMounted(() => {
    change(activePaneIndex.value)
})
</script>

<style scoped lang="scss">
@import '../../style/index.css'
</style>