import type { ExtractPropTypes, PropType } from 'vue';
import type Icon from './icon.vue';

// String
// Number
// Boolean
// Symbool
// Object
// Date
// Function
// Array
export const iconProps = {
  color: String,
  // size 可以是数字，也可以是字符串
  size: [Number, String] as PropType<number | string>
} as const;

export type Props = ExtractPropTypes<typeof iconProps>;
export type IconInstance = InstanceType<typeof Icon>;
