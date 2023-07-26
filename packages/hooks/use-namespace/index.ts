/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-07-26 16:08:59
 * @LastEditTime: 2023-07-26 16:52:57
 */
import {computed, unref} from 'vue';
// 默认命名前缀
export const defaultNamespace = 'mo';

// BEM 命名字符串拼接函数
const _bem = (namespace: string, block: string, blockSuffix: string, element: string, modifier: string) => {
  // 默认 Block
  let cls = `${namespace}-${block}`;
  if(blockSuffix){
    cls += `-${blockSuffix}`;
  }
  // 如果存在元素
  if(element){
    cls += `__${element}`
  }
  // 如果存在修改器
  if(modifier){
    cls += `--${modifier}`;
  }

  return cls;
}

export const useNamespace = (block: string) => {
  // 命名前缀也就是命名空间
  const namespace = computed(() => defaultNamespace);
  // 创建块 例如：el-form
  const b = (blockSuffix = '') => _bem(unref(namespace), block, blockSuffix, '', '');
  // 创建元素 例如：el-input__inner
  const e = (element?: string) => element ? _bem(unref(namespace), block, '', element, '') : '';
  // 创建块修改器 例如：el-form--default
  const m = (modifier?: string) => modifier? _bem(unref(namespace), block, '', '', modifier) : '';
  
  // 创建后缀块元素 例如：el-form-item__label
  const be = (blockSuffix?: string, element?: string) => 
    blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, '') : '';
  // 创建元素修改器 例如：el-scrollbar__wrap--hidden-default
  const em = (element?: string, modifier?: string) =>  
    element && modifier ? _bem(unref(namespace), block, '', element, modifier) : '';
  // 创建块后缀修改器 例如：el-form-item--default
  const bm = (blockSuffix?: string, modifier?: string) => 
    blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, '', modifier) : '';

  // 创建块元素修改器 例如：el-form-item__content--xxx
  const bem = (blockSuffix?: string, element?: string, modifier?: string) => 
    blockSuffix && element && modifier
    ? _bem(unref(namespace), block, blockSuffix, element, modifier)
    : '';

   // 创建动作状态 例如：is-success is-required
  const statePrefix = 'is-';
  const is: {
    (name: string, state: boolean | undefined): string;
    (name: string): string;
  } =  (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${statePrefix}${name}` : ''
  }

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  };
}

