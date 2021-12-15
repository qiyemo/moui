import { withInstall } from '../../utils/with-install';

import Card from './src/card.vue';

console.log('Card', Card);

export const MCard = withInstall(Card, []);
export default MCard;
