/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: 图标组件入口文件
 * @Date: 2023-07-26 17:52:56
 * @LastEditTime: 2023-07-28 13:57:42
 */
import { withInstall } from '@moui/utils';
import Icon from './src/icon.vue';

// 通过 withInstall 方法给 Icon 添加了一个 install 方法
const MoIcon = withInstall(Icon);
export default MoIcon;

// 导出 Icon 组件的 props
export * from './src/icon';
