const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
// --open
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, './src/'),
    publicPath: '/',
    host: '127.0.0.1',
    port: 3000,
    stats: {
      colors: true
    }
  },
});