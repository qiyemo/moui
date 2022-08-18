import { App } from "vue";
import "uno.css";
import MButton from "./button";

// 导出单独的组件
export { MButton };

// 编写一个插件，实现一个 install 方法
export default {
  install(app: App): void {
    app.component(MButton.name, MButton);
  },
};
