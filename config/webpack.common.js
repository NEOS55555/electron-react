const webpack = require("webpack");
// const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { src, entry, defaultCss, templateHtml } = require('../constant')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// console.log(process.env.NODE_ENV)
module.exports = {
  entry,
  // 将 jsx 添加到默认扩展名中，省略 jsx
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'],
    alias: {
      '@': src
    },
  },
  module: {
    rules: [
        {
          test:  /\.(js|jsx|mjs)$/, // jsx文件的正则
          exclude: /node_modules/, // 排除 node_modules 文件夹
          use: {
              // loader 是 babel
            loader: 'babel-loader',
            options: {
              // babel 转义的配置选项
              babelrc: false,
              presets: [
                // 添加 preset-react
                require.resolve('@babel/preset-react'),
                [require.resolve('@babel/preset-env'), {modules: false}]
              ],
              cacheDirectory: true
            }
          }
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.(scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              // loader: require.resolve("sass-resources-loader"),
              loader: 'sass-resources-loader',
              options: {
                  resources: defaultCss //这里是你自己放公共scss变量的路径
              }
            },
          ]
        }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce((env, key) => {
          env[key] = JSON.stringify(process.env[key])
          return env;
      }, {})
    }),
    new HtmlWebPackPlugin({
      template: templateHtml,
      filename: 'index.html',
      inject: true,

    }),
    new webpack.ExternalsPlugin('commonjs', [
      'electron'
    ])
  ]
};