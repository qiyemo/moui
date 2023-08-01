/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-01 21:52:07
 * @LastEditTime: 2023-08-01 22:42:22
 */
import { withInstall } from '@moui/utils';
import Lucksheet from './src/luckysheet.vue';

// 通过 withInstall 方法给 Icon 添加了一个 install 方法
const Sheet = withInstall(Lucksheet);
export default Sheet;
