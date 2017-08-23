const path = require('path');
var utils = require('./utils');

module.exports = {
  entry: {
    //项目的入口文件
    app:["./examples/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "../examples"),
    publicPath:"/examples/",
    filename:"bundle.js"
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules\/(?!pcadmin-.*)/,
          loader: 'babel-loader',
      },
      {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: utils.cssLoaders(),
          }
      },
    ],
  }
}
