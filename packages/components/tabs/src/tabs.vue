<!--
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-05-31 15:29:17
 * @LastEditTime: 2022-06-21 18:25:47
-->
<template>
  <div class="mTabs" :style="type === 'border-card' ? `border:1px solid #ccc` : ''">
    <div class="tabs_pane"
      :style="type == 'border-card' ? `background:#f1f1f1;border-bottom:1px solid #f1f1f1` : type == 'card' ? 'border-bottom:1px solid #f1f1f1' : ''">
      <div class="btn-content" :style="stretch ? `display:flex;justify-content: space-around` : ``">
        <button :class="item.name === val ? 'blue' : ''"
          :style="type === 'border-card' ? `position: relative;padding:10px 20px;color:#999` : type === 'card' ? 'border:1px solid #f1f1f1;border-bottom:1px none;position: relative;padding:10px 20px;' : 'padding:10px 15px 10px 0;margin-right:25px'"
          v-for="(item, index) in list" :key="index" @click="changeValue(item.name, index)" :disabled="item.disabled">
          <span :ref="labelRef(index)" class="spans">{{ `${item.label}` }}</span>
          <span class="guan" v-if="closable">x</span>
        </button>
      </div>
      <div v-if="type === ''" class="line" :style="`left: ${left} px; width:${width} px`"></div>
    </div>
    <div class="content" ref="tabs" :style="type == 'border-card' ? 'padding:17px 12px' : ''">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MTabs',
}
</script>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { defineProps, defineExpose, onMounted, ref, getCurrentInstance, watch, defineEmits, nextTick, useSlots, useAttrs, onUnmounted } from 'vue';

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  //标签的宽度是否自动撑开
  stretch: {
    type: Boolean,
    default: false,
  },
  //标签元素是否关闭
  closable: {
    type: Boolean,
    default: false,
  },
  //类型风格
  type: {
    type: String,
    default: "",
  }
});
//初始数据
const list = ref([])
//双向绑定用的
let val = ref(props.value);
//下划线的左侧位置
const left = ref<Number>(0);
//下划线的宽度
const width = ref<Number>(0);
// 获取tabs元素
const tabs = ref('')
// 获取vue实例
const instance = getCurrentInstance();
//进行定义内容list
const listValue = () => {
  let arrVal = Array.from(arr)
  arrVal = arrVal.map((item) => {
    return {
      name: item.name,
      label: item.label,
      disabled: item.disabled,
    }
  })
  list.value = arrVal
}
//改变value的内容
const changeValue = (name, index) => {
  width.value = instance?.refs[`labe${index}`][0].offsetWidth;
  left.value = instance?.refs[`labe${index}`][0].offsetLeft;
  val.value = name;
}
defineExpose({
  list, val, left, width
})
onMounted(() => {
  listValue()
  nextTick(() => {
    width.value = instance?.refs?.labe0[0].offsetWidth;
    left.value = instance?.refs?.labe0[0].offsetLeft;
  })

})
let arr = [];
instance.proxy.$Bus.on("propsList", (num) => {
  arr.push(num)
})
watch(
  () => props.value,
  (newVal) => {
    val.value = newVal
    console.log('val', newVal)
  }
)
const emit = defineEmits();
watch(
  () => val.value,
  (newVal) => {
    (emit as any)('input', newVal)
  },
  {
    deep: true
  }
)
const typeCard = computed(() => {
  if (props.type === "card") {
  }
  return props.type;
});
// 动态绑定ref属性
let itemRef = ref([])
const labelRef = (index: number) => {
  itemRef.value.push(`labe${index}`)
  return `labe${index}`
}
instance.proxy.$Bus.emit('changeVal', val)
onUnmounted(() => {
  instance.proxy.$Bus.off('propsList')
})
</script>

<style scoped lang="scss">
.tabs_pane {
  width: 100%;
  border-bottom: 2px solid #dddddd;
  position: relative;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    text-align: center;
  }

  button:hover {
    color: #409eff;
  }

  button:disabled {
    color: #cccccc;
    cursor: inherit;
  }

  .blue {
    color: #409eff !important;
  }

  .borderCard {
    padding-top: 11px;
    bottom: -1px;
    color: #409eff !important;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    margin-left: -1px;
    background-color: #fff;
  }

  .line {
    position: absolute;
    bottom: -2;
    height: 2px;
    background-color: #409eff;
    transition: left 0.2s linear;
  }

  .btn-content {
    width: 100%;
  }

  .guan {
    border-radius: 50%;
    display: inline-block;
    padding: 0 3px;
    margin-left: 2px;
  }

  .guan:hover {
    background: #cccccc;
    color: #fff;
  }
}

.content {
  width: 100%;
  padding: 17px 0px;
  box-sizing: border-box;
}
</style>