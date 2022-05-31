/*
 * @Author: zj
 * @LastEditors: zj
 * @Date: 2022-05-31 11:12:16
 * @LastEditTime: 2022-05-31 11:33:32
 */
import { withInstall } from '../../utils/with-install';

import Container from './src/container.vue';

console.log('Container', Container);

export const MContainer = withInstall(Container, []);
export default MContainer;
