# button
常用操作按钮
## 基础用法
基础的函数用法

::: demo 使用`size`、`style`属性来定义 Card 的样式。

``` vue
<template>
<m-button type="primary" class="demo-btn" @click="handleClick">主要按钮</m-button>
<m-button use="success" class="demo-btn" @click="handleClick">成功按钮</m-button>
<m-button use="warn" class="demo-btn" @click="handleClick">警告按钮</m-button>
<m-button use="danger" class="demo-btn" @click="handleClick">失败按钮</m-button>
</template>
<style>
.demo-btn{
  margin:8px;
}
</style>
<script setup>
  const handleClick = (text) => {
    console.log('点击了按钮');
  }
</script>
```
::: 
