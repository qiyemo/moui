import { StyleValue } from '../../../utils/types';
import type { ExtractPropTypes } from 'vue';

export const cardProps = {
  header: {
    type: String,
    default: ''
  },
  bodyStyle: {
    type: String,
    default: ''
  },
  shadow: {
    type: String,
    default: ''
  }
};
export type CardProps = ExtractPropTypes<typeof cardProps>;
