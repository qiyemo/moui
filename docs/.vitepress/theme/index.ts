/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-05-23 14:32:49
 * @LastEditTime: 2023-05-24 11:09:45
 */
import Theme from 'vitepress/dist/client/theme-default';
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';

// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js';

// 插件的组件，主要是 demo 组件
import MoUI from 'motl-ui';
// 引入 MoUI 样式
import 'motl-ui/dist/style.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    // 注册 Demo、DemoBlock
    registerComponents(app);
    // 注册 组件库
    app.use(MoUI);
  }
};
