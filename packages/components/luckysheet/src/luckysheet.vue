<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-01 21:52:25
 * @LastEditTime: 2023-08-01 23:29:42
-->
<script setup lang="ts">
import { onMounted } from 'vue';

defineOptions({
  name: 'MoSheet'
});

onMounted(() => {
  const options = {
    container: 'luckysheet', //luckysheet为容器id
    lang: 'zh',
    plugins: [
      {
        name: 'print',
        trigger: () => {
          console.log('plugins.print.trigger ...');
        }
      }
    ]
  };

  (window as any).luckysheet.create(options);
});
</script>
<template>
  <div id="luckysheet"></div>
</template>
<style scoped>
#luckysheet {
  width: 100%;
  height: 100%;
}
</style>
