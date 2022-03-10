/*
 * @Author: qiye
 * @Date: 2021-10-19 16:25:32
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 16:26:00
 * @Description: file content
 */
import MCard from './card';

const comps = {
  MCard
};

export default {
  install: (app: any) => {
    Object.keys(comps).forEach((key) => {
      app.use(comps[key]);
    });
  }
};
