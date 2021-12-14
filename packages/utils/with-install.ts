/*
 * @Author: qiye
 * @Date: 2021-10-19 16:31:49
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 16:31:50
 * @Description: file content
 */
export const withInstall = (main, extra = undefined) => {
  main.install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
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

export const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
