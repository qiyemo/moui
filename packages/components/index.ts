/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-07-25 18:11:36
 * @LastEditTime: 2023-07-27 09:14:33
 */
import { App } from 'vue';
import MoButton from './button';

// 导出单独的组件
export { MoButton };

// 编写一个插件，实现一个 install 方法
export default {
  install(app: App): void {
    app.use(MoButton);
  }
};
