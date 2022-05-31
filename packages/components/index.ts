/*
 * @Author: qiye
 * @Date: 2021-10-19 16:25:32
 * @LastEditors: zj
 * @LastEditTime: 2022-05-31 17:12:29
 * @Description: file content
 */
import MCard from './card';
import MButton from './button';
import MBorder from './border';
import MContainer from './container';
import MPagenation from './pagenation';

const comps = {
  MCard,
  MButton,
  MBorder,
  MContainer,
  MPagenation
};

export default {
  install: (app: any) => {
    Object.keys(comps).forEach((key) => {
      app.use(comps[key]);
    });
  }
};
