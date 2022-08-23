import Theme from "vitepress/dist/client/theme-default";
// 主题样式
import "vitepress-theme-demoblock/theme/styles/index.css";

// 插件的组件，主要是demo组件
import { registerComponents } from "./register-components.js";

// 插件的组件，主要是 demo 组件
import MoUI from "motl-ui/dist/mo-ui.esm";
// 插件 css
import 'motl-ui/dist/assets/entry.7b094ac9.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app);
    app.use(MoUI);
  },
};
