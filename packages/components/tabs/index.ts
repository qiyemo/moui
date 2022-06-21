/*
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-06-01 13:48:55
 * @LastEditTime: 2022-06-21 09:54:22
 */
import { withInstall } from '../../utils/with-install';

import Tabs from './src/tabs.vue';

console.log('Tabs', Tabs);

export const MTabs = withInstall(Tabs, []);
export default MTabs;
