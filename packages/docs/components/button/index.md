# button
常用操作按钮
## 基础用法
基础的函数用法

::: demo 使用`size`、`style`属性来定义 Card 的样式。

``` vue
<template>
<div style="margin-bottom: 16px;">
<m-button @click="handleChangeSize('large')">大</m-button>
<m-button @click="handleChangeSize('middle')">默认</m-button>
<m-button @click="handleChangeSize('small')">小</m-button>
</div>

<m-button type="primary" :size="sizeRef" class="demo-btn" @click="handleClick">主要按钮</m-button>
<m-button use="success" :size="sizeRef" class="demo-btn" @click="handleClick">成功按钮</m-button>
<m-button use="warn" :size="sizeRef" class="demo-btn" @click="handleClick">警告按钮</m-button>
<m-button use="danger" :size="sizeRef" class="demo-btn" @click="handleClick">失败按钮</m-button>
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
