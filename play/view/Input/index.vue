<!--
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 13:35:24
 * @FilePath: \moui\play\view\Input\index.vue
 * @LastEditTime: 2022-06-22 15:42:08
 * @LastEditors: JESS
-->
<template>
    <div class="">
        <m-input type="text" v-model="value" maxlength="20" minlength="6" :placeholder="placeholder"
            :disabled="disabled">
            姓名
        </m-input>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const type = ref('text');
const maxlength = ref(20);
const minlength = ref(4);
const showWordLimit = ref(true);
const placeholder = ref('请输入');
const clearable = ref(true);
const disabled = ref(false);
const value = ref('');
</script>

<style scoped lang="scss">
</style>
