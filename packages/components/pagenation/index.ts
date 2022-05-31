/*
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-31 16:47:11
 * @LastEditTime: 2022-05-31 17:11:46
 */
import { withInstall } from '../../utils/with-install';

import Pagenation from './src/page.vue';

console.log('Pagenation', Pagenation);

export const MPagenation = withInstall(Pagenation, []);
export default MPagenation;
