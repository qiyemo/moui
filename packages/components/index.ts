/*
 * @Author: qiye
 * @Date: 2021-10-19 16:25:32
 * @LastEditors: zj
 * @LastEditTime: 2022-05-30 15:44:27
 * @Description: file content
 */
import MCard from './card';
import MButton from './button';

const comps = {
  MCard,
  MButton
};

export default {
  install: (app: any) => {
    Object.keys(comps).forEach((key) => {
      app.use(comps[key]);
    });
  }
};
