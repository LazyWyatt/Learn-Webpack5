const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  //設置模式
  //development 開發階段，會設置development
  //production 準備打包上線的時候，設置production
  mode: 'development',
  //設置source-map，建立js映射文件，方便調適代碼跟錯誤。
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'), //絕對路徑，不能寫相對路徑。
    filename: 'js/bundle.js',
    // assetModuleFilename: 'img/[name]_[hash:6][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // {
      //   test: /\.(jpe?g|png||gif|svg)$/, //問號表達0個或1個
      //   use: {
      //     loader: 'file-loader',
      //     options: { outputPath: 'img', name: '[name]-[hash:6].[ext]' },
      //   },
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/, //問號表達0個或1個
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       outputPath: 'img',
      //       name: '[name]-[hash:6].[ext]',
      //       limit: 100 * 1024,
      //     },
      //   },
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      // {
      //   test: /\.(eot|ttf|woff|woff2)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: 'font',
      //       name: '[name]_[hash:6].[ext]',
      //     },
      //   },
      // },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]_[hash:6][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '哈哈哈哈哈',
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
}
