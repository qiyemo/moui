# button
常用操作按钮
## 基础用法
基础的函数用法

::: demo 使用`size`、`style`属性来定义 Card 的样式。

``` vue
<template>
<div style="margin-bottom: 16px;">
<mo-button @click="handleChangeSize('large')">大</mo-button>
<mo-button @click="handleChangeSize('middle')">默认</mo-button>
<mo-button @click="handleChangeSize('small')">小</mo-button>
</div>

<mo-button type="primary" :size="sizeRef" class="demo-btn" @click="handleClick">主要按钮</mo-button>
<mo-button use="success" :size="sizeRef" class="demo-btn" @click="handleClick">成功按钮</mo-button>
<mo-button use="warn" :size="sizeRef" class="demo-btn" @click="handleClick">警告按钮</mo-button>
<mo-button use="danger" :size="sizeRef" class="demo-btn" @click="handleClick">失败按钮</mo-button>
</template>
<style>
.demo-btn{
  margin:8px;
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
const sizeRef = ref('middle');
const handleClick = (text) => {
  console.log('点击了按钮');
}

const handleChangeSize = (size) => {
  sizeRef.value = size;
}

onMounted(() => {
  sizeRef.value = "middle";
});


</script>
```
::: 
