import Theme from 'vitepress/dist/client/theme-default';
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js';

import * as Compocents from '../../../packages/components';
import '../../../packages/theme-chalk/src/index.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    // register global components
    registerComponents(app);
    for (let key in Compocents) {
      if (Compocents[key].install && typeof Compocents[key].install === 'function') {
        app.use(Compocents[key]);
      }
    }
  }
};
