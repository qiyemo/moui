/*
 * @Author: zj
 * @LastEditors: JESS
 * @Date: 2022-05-31 16:47:11
 * @LastEditTime: 2022-06-21 10:15:56
 */
import { withInstall } from '../../utils/with-install';

import tabsPane from './src/tabsPane.vue';

console.log('TabsPane', tabsPane);

export const MTabsPane = withInstall(tabsPane, []);
export default MTabsPane;
