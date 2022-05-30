import { withInstall } from '../../utils/with-install';

import Button from './src/button.vue';

console.log('Button', Button);

export const MButton = withInstall(Button, []);
export default MButton;
