/*
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 12:27:10
 * @FilePath: \moui\packages\components\input\index.ts
 * @LastEditTime: 2022-06-22 13:38:41
 * @LastEditors: JESS
 */
import { withInstall } from '../../utils/with-install';

import Input from './src/index.vue';

console.log('Input', Input);

export const MInput = withInstall(Input, []);
export default MInput;
