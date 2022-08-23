import { App } from "vue";
import Button from "./button";
import "../../theme/index.css";

// 导出button组件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
