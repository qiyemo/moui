/*
 * @Author: qiye
 * @Date: 2021-10-19 16:25:32
 * @LastEditors: JESS
 * @LastEditTime: 2022-06-21 10:12:35
 * @Description: file content
 */
import MCard from './card';
import MButton from './button';
import MBorder from './border';
import MContainer from './container';
import MPagenation from './pagenation';
import MTabs from './tabs';
import MTabsPane from './tabsPane';

const comps = {
  MCard,
  MButton,
  MBorder,
  MContainer,
  MPagenation,
  MTabs,
  MTabsPane
};

export default {
  install: (app: any) => {
    Object.keys(comps).forEach((key) => {
      app.use(comps[key]);
    });
  }
};
