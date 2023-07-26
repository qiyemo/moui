/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-07-25 18:11:36
 * @LastEditTime: 2023-07-26 09:13:26
 */
import { App } from 'vue';
import Button from './button';

// 导出button组件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  }
};
