/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-01 21:20:51
 * @LastEditTime: 2023-08-01 23:24:40
 */
import { createApp } from 'vue';
import MoIcon from '@moui/components/icon';
import MoSheet from '@moui/components/luckysheet';
import '@moui/theme-chalk/src/index.scss';
import './style.css';
import App from './App.vue';

// 需要注册的组件列表
const components = [MoIcon, MoSheet];
// 是否已安装标识
const INSTALLED_KEY = Symbol('INSTALLED_KEY');
// 组件库插件
const Moui = {
  install(app: any) {
    // 如果该组件库已经安装过了，则不进行安装
    if (app[INSTALLED_KEY]) return;
    // 将标识值设置为 true，表示已经安装了
    app[INSTALLED_KEY] = true;
    // 循环组件库中的每个组件进行安装
    components.forEach((c) => app.use(c));
  }
};

console.log('components', components);

const app = createApp(App);
// 安装组件库
app.use(Moui);
app.mount('#app');
