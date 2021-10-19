/*
 * @Author: qiye
 * @Date: 2021-10-19 16:44:19
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 16:50:59
 * @Description: file content
 */
import { useFormItemProps } from '../../../hooks'
import { buildProps } from '../../../utils/props'

import type { ExtractPropTypes } from 'vue'

export const buttonType = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const
export const buttonSize = ['', 'large', 'medium', 'small', 'mini'] as const
export const buttonNativeType = ['button', 'submit', 'reset'] as const

export const buttonProps = buildProps({
  ...useFormItemProps,
  type: {
    type: String,
    values: buttonType,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  nativeType: {
    type: String,
    values: buttonNativeType,
    default: 'button',
  },
  loading: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
} as const)

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']