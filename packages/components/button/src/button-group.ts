/*
 * @Author: qiye
 * @Date: 2021-10-19 16:37:49
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 16:37:50
 * @Description: file content
 */
import { buttonProps } from './button'

import type { ExtractPropTypes } from 'vue'

export const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type,
} as const
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>