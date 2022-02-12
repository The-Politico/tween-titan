const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const dev = merge(common, {
  mode: 'development',
  devServer: {
    static: './',
    open: ['/dev'],
  },
});

module.exports = dev;
