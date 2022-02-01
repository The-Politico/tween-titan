const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Constants', path.resolve(__dirname, './src/constants')],
          ['Common', path.resolve(__dirname, './src/common')],
          ['Src', path.resolve(__dirname, './src')],
        ],
      },
    },
  },
};
