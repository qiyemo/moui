// 读取 vite 配置
import { build, InlineConfig, defineConfig, UserConfig } from 'vite';
import path from 'path';
import fs from 'fs-extra';
import config from '../vite.config';

const toCamelCase = (name: string): string => name;

const buildAll = async () => {
  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);
  const srcDir = path.resolve(__dirname, '../src');
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含 index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes('index.ts');
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name: toCamelCase(name),
          fileName: `index`,
          formats: [`es`, `umd`]
        },
        outDir
      };
      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "motl-ui/${name}",
          "main": "index.esm.js",
          "module": "index.esm.js"
        }`,
        `utf-8`
      );
    });
};

buildAll();
