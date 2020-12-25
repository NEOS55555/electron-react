const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { src, host, port } = require('../constant')
// --open
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: src,
    publicPath: '/',
    host,
    port,
    stats: {
      colors: true
    }
  },
});