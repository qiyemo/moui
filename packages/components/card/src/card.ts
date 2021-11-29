import {buildProps, definePropType} from '../../../utils/props';
import {StyleValue} from '../../../utils/types';
import type {ExtractPropTypes} from 'vue';

export const cardProps = buildProps({
  header: {
    type: String,
    default: ''
  },
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: ''
  },
  shadow: {
    type: String,
    default: ''
  }
} as const);

export type CardProps = ExtractPropTypes<typeof cardProps>