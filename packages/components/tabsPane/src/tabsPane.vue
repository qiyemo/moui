<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-21 09:50:06
 * @FilePath: \moui\packages\components\tabsPane\src\tabsPane.vue
 * @LastEditTime: 2022-06-21 18:26:32
 * @LastEditors: JESS
-->
<template>
    <div class="tabs_pane">
        <div class="myTabsPane" v-show="showValue">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MTabsPane',
}
</script>

<script lang="ts" setup>
import { defineProps, computed, getCurrentInstance, onMounted, defineExpose, watch, ref } from 'vue';

const props = defineProps({
    // 选项卡标题
    label: {
        type: String,
        default: "",
    },
    name: { type: String, default: "" },
    disabled: {
        type: Boolean,
        default: false,
    },
})
const instance = getCurrentInstance();
const showValue = computed(() => {
    return props.name == dataVal.value;
})
defineExpose({
    name: props.name,
    label: props.label,
    disabled: props.disabled,
})

instance?.proxy.$Bus.emit('propsList', props)
const dataVal = ref(instance?.parent?.exposed?.val.value);
instance.proxy.$Bus.on("changeVal", (num) => {
    dataVal.value = num
})

watch(
    () => instance?.parent?.exposed?.val.value,
    (num) => {
        dataVal.value = num
    }
)
</script>

<style scoped lang="scss">
</style>