const path = require('path');

const dist = 'web-build';
const src = path.join(__dirname, '../render/src/');
const entry = path.resolve(__dirname, '../render/src/index.js');
const templateHtml = path.resolve(__dirname, '../render/public/index.html');
const defaultCss = path.resolve(__dirname, "../render/src/assets/css/default.scss");

module.exports = {
  dist,
  src,
  entry,
  templateHtml,
  defaultCss,
  host: '127.0.0.1',
  port: 3000,
}