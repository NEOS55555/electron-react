const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({default: ['dist']}),
  ],
  output: {
    // publicPath: '',
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    devtoolModuleFilenameTemplate: info =>
            path.relative(path.resolve(__dirname, 'src'), info.absoluteResourcePath)
                .replace(/\\/g, '/'),
  }
});