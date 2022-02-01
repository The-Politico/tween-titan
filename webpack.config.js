const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    alias: {
      Constants: path.resolve(__dirname, './src/constants'),
      Common: path.resolve(__dirname, './src/common'),
      Src: path.resolve(__dirname, './src'),
    },
  },
};
