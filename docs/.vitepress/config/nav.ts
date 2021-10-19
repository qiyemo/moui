/*
 * @Author: qiye
 * @Date: 2021-10-19 17:57:15
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 19:44:24
 * @Description: file content
 */
import { ensureLang } from '../utils/lang'
// import navLocale from '../i18n/pages/sidebar.json'

// Mapping the first sub link to the nav link to avoid 404 error.


export const nav = [
  {
    text: '指南',
    link: '/guide/',
    activeMatch: '^/guide/'
  },
  {
    text: '组件',
    link: '/components/button',
    activeMatch: '^/components/'
  }
];