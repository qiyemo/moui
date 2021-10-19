/*
 * @Author: qiye
 * @Date: 2021-10-19 16:08:36
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 19:49:22
 * @Description: vitepress 配置文件
 */

import type {UserConfig} from 'vitepress'
// import {head} from './config/head'
import {sidebar} from './config/sidebars'
import {nav} from './config/nav'
import { mdPlugin } from './config/plugins'
// import {mdPlugin} from './config/plugins'
// import {features} from './config/features'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}


module.exports = {
  title: 'Hellow World',
  description: 'Hellow World',
  lang: 'zh-CN',
  themeConfig: {
    nav,
    sidebar
  },
  // markdown: {
  //   config: (md) => mdPlugin(md)
  // },

  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      }
    }
  }
} as UserConfig