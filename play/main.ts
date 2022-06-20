/*
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-20 14:00:23
 * @FilePath: \moui\play\main.ts
 * @LastEditTime: 2022-06-20 15:51:18
 * @LastEditors: JESS
 */
import { createApp } from 'vue';
import Moui from '@/components';
import App from './App.vue';
import 'normalize.css';
import '@/theme/index.css';
import './styles/index.css';
// 引入 mitt
import mitt from 'mitt';
// 初始化 mitt
const Mit = mitt();
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
const app = createApp(App).use(Moui);
// 挂载全局Api
app.config.globalProperties.$Bus = Mit
app.mount('#app');
