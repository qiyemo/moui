/*
 * @Author: qiye
 * @Date: 2021-10-19 16:08:36
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 19:49:22
 * @Description: vitepress 配置文件
 */

import type {UserConfig} from 'vitepress'
import {sidebar} from './config/sidebars'
import {nav} from './config/nav'

module.exports = {
  title: 'Hellow World',
  description: 'Hellow World',
  lang: 'zh-CN',
  themeConfig: {
    nav,
    sidebar
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const {demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    }
  }
} as UserConfig