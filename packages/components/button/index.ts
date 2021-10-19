/*
 * @Author: qiye
 * @Date: 2021-10-19 16:27:55
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 16:37:00
 * @Description: file content
 */

import { withInstall, withNoopInstall } from '../../utils/with-install'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const ElButton = withInstall(Button, {
  ButtonGroup,
})
export const ElButtonGroup = withNoopInstall(ButtonGroup)
export default ElButton

export * from './src/button'