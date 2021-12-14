/*
 * @Author: qiye
 * @Date: 2021-10-19 16:40:19
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 16:55:05
 * @Description: file content
 */
import type { InjectionKey } from 'vue';

import type { ButtonProps } from '../components/button';

export interface ElButtonGroupContext {
  size?: ButtonProps['size'];
  type?: ButtonProps['type'];
}

export const elButtonGroupKey: InjectionKey<ElButtonGroupContext> = Symbol();
