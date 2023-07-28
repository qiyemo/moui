/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-07-25 18:11:36
 * @LastEditTime: 2023-07-28 17:56:51
 */
/** .eslintrc.js
 * process.env.NODE_ENV 一个 node 环境变量，使用过程可能会报错，解决办法 npm i -D @types/node
 * 在VSCode中安装ESLint插件，编写过程中检测代码质量
 * ESLint 代码质量校验相关配置
 * 这里使用prettier作为代码格式化工具，用ESLint做代码质检
 * 相关配置使用下面extends扩展先做默认设置
 * 在.prettierrc.js文件中配置好后，格式化规则会以.prettierrc.js作为最终格式，所以不建议在本文件中做代码格式化相关配置
 * 相关prettier配置ESLint会默认加载为代码质检 格式化以prettier为主
 * 在本配置文件中只做代码质量约束规范配置
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    // 'airbnb-base', // 一种流行的编码风格
    'plugin:@typescript-eslint/recommended', // ts 支持
    'plugin:vue/vue3-recommended', // 使用插件支持vue3
    'plugin:prettier/recommended',
    'prettier'
  ],

  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: [],

  rules: {
    'prettier/prettier': 'error',
    // 生产模式不允许使用log
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产默认不允许使用debugger
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }], // 变量声明未使用
    '@typescript-eslint/no-explicit-any': 'off', // 允许ts使用any
    'vue/multi-word-component-names': ['off']
  }
};
