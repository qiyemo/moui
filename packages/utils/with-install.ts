/*
 * @Author: qiye
 * @Date: 2021-10-19 16:31:49
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 16:31:50
 * @Description: file content
 */

export const withInstall = (main: any, extra: any[] = []) => {
  main.install = (app) => {
    for (const comp of [main, ...extra]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};

export default withInstall;
