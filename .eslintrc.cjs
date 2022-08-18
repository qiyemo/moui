module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true,
  },
  // 解析 .vue 文件
  parser: "vue-eslint-parser",
  extends: [
    "plugin:json/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "airbnb-base",
    "@vue/prettier",
  ],
  plugins: ["@typescript-eslint"],

  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error",

    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": "off",
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true
//   },
//   extends: [
//     // 'plugin:vue/essential',
//     'plugin:vue/vue3-recommended', // vue3 插件
//     'airbnb-base',
//     'plugin:prettier/recommended' // 添加 prettier 插件
//   ],
//   parserOptions: {
//     ecmaVersion: 13,
//     parser: '@typescript-eslint/parser',
//     sourceType: 'module'
//   },
//   plugins: ['vue', '@typescript-eslint'],
//   rules: {
//     'import/no-unresolved': 'off',
//     'import/extensions': 'off',
//     'import/no-absolute-path': 'off',
//     'import/no-extraneous-dependencies': 'off'
//   }
// };
