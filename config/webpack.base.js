const path = require('path'); // node内置的模块，用来设置路径。
// 清除之前打包的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function absolePath(module) {
  return path.join(__dirname, module);
}

module.exports = {
  // 入口   此为单页面应用（SPA）,多页面应用（MPA）查 https://www.webpackjs.com/guides/output-management/#%E9%A2%84%E5%85%88%E5%87%86%E5%A4%87
  entry: path.join(__dirname, '../src/index.js'),
  // 出口
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.join(__dirname, '../dist'), // 输出文件路径配置
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['node_modules', absolePath('../web_modules')],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'thread-loader', // 多进程打包
            options: {
              workers: 3,
            },
          },
        ], // 部分ES6的语法不能编译，比如import
      },
      {
        test: /\.(png|ico|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [

    new CleanWebpackPlugin(),

  ],
};
