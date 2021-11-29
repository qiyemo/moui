
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'

import Button from '../../../packages/components/button/src/button.vue';


export default {
  enhanceApp({ app }) {
    registerComponents(app);
    // register global components
    app.component(Button.name, Button);

  }
}