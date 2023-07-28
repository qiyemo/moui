/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-07-28 15:15:31
 * @LastEditTime: 2023-07-28 15:17:45
 */
import type Icon from '@moui/components/icon';
// For this project development
import '@vue/runtime-core';

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    MoIcon: typeof Icon;
  }
}

export {};
