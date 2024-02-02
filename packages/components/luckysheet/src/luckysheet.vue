<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-01 21:52:25
 * @LastEditTime: 2023-08-02 17:07:01
-->
<script setup lang="ts">
import { onMounted, ref, reactive, nextTick } from 'vue';
import { cutToBlobUrl } from '@moui/utils/canvas';

defineOptions({
  name: 'MoSheet'
});

/** 选区相关 start */
const currentRange = ref<any>(null);
const handleRangeSelect = (sheet: any, range: any[]) => {
  console.log('sheet: ', sheet);
  console.log('range: ', range);
  currentRange.value = range;
};

interface IProps {
  margin?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  margin: 0
});
/** 选区相关 end */

const buildInitOptions = () => {
  return {
    container: 'luckysheet', //luckysheet为容器id
    lang: 'zh',
    showsheetbar: false,
    showinfobar: false,
    showtoolbarConfig: {
      exportXlsx: false
    },
    hook: {
      rangeSelect: handleRangeSelect
    },

    plugins: [
      {
        name: 'print',
        trigger: (store: any) => {
          console.log('plugins.print.trigger ...', store);
          const r: any = store.luckysheet_select_save?.[0];
          if (!r) {
            console.info('请选择需要打印的区域');
            return;
          }
          const x = r.left + r.width - 29;
          const y = r.top + r.height - 1;
          const width = r.width_move + 2;
          const height = r.height_move + 2;
          previewState.src = cutToBlobUrl('#luckysheetTableContent', x, y, width, height, props.margin);
          previewState.height = height + 4 + 2 * props.margin;
          previewState.width = width + 2 * props.margin;
          // previewState.printHtml = `<img :src="${previewState.src}" style="width:100%;height:100%;" class="print__img" />`;
          previewMethods.open();
        }
      }
    ]
  };
};

/** 预览 start */
const previewState = reactive<any>({
  visible: false,
  src: '',
  printHtml: '',
  height: 0,
  width: 0
});

const previewMethods = {
  open: () => {
    previewState.visible = true;

    console.log('open ...');
  },
  close: () => {
    previewState.visible = false;
  },
  draw: () => {
    console.log('draw ...');
    const iframe: any = document.querySelector('#luckysheet-print-iframe');
    if (!iframe || !iframe.contentDocument) {
      return;
    }
    iframe.contentDocument.body.style.textAlign = 'center';
    const imgEl: any = iframe.contentDocument.querySelector('img');

    console.log('imgEl ', imgEl);
    if (imgEl) {
      imgEl.style.display = 'inline-block';
      imgEl.style.margin = '0 auto';
    }
  },
  print: () => {
    const iframe: any = document.querySelector('#luckysheet-print-iframe');

    console.log('before print ');
    iframe.contentWindow.print();
    console.log('end print ');
  }
};

/** 预览 end */

const init = () => {
  const options = buildInitOptions();
  (window as any).luckysheet.create(options);
};

onMounted(() => {
  init();
});
</script>
<template>
  <div id="luckysheet"></div>
  <el-dialog v-model="previewState.visible" :append-to-body="false" title="预览" @opened="previewMethods.draw">
    <div style="text-align: center">
      <iframe id="luckysheet-print-iframe" :src="previewState.src" :width="`800px`" :height="previewState.height" frameborder="0"></iframe>
    </div>
    <template #footer>
      <el-button type="primary" @click="previewMethods.print">确定</el-button>
    </template>
  </el-dialog>
</template>
<style scoped>
#luckysheet {
  width: 100%;
  height: 100%;
}

#luckysheet-print-iframe img {
  display: inline-block;
  margin: 0 auto;
}

.print__img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>
