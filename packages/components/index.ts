import { App } from 'vue';
import '@motl-ui/theme';
import MoButton from './button';

// 导出单独的组件
export { MoButton };

// 编写一个插件，实现一个 install 方法
export default {
  install(app: App): void {
    app.use(MoButton);
  }
};
