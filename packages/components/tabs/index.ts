/*
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-06-01 13:48:55
 * @LastEditTime: 2022-06-01 13:50:03
 */
import { withInstall } from '../../utils/with-install';

import Tabs from './src/tabs.vue';

console.log('Tabs', Tabs);

export const MTabs = withInstall(Tabs, []);
export default MTabs;
