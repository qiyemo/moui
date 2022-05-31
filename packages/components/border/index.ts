import { withInstall } from '../../utils/with-install';

import Border from './src/border.vue';

console.log('Border', Border);

export const MBorder = withInstall(Border, []);
export default MBorder;
