const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
  },
  devServer: {
    contentBase: './public',
    hot: true,
    // host: '0.0.0.0',
    port: 9889,
    open: true,
    // compress: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8888',
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  },
  resolve: {
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      js: path.resolve(__dirname, './src/js'),
    },
  },
  // watch: true,
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
      {
        test: /\.js$/,
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     // plugins: [
        //     //   '@babel/plugin-transform-arrow-functions',
        //     //   '@babel/plugin-transform-block-scoping',
        //     // ],
        //     presets: ['@babel/preset-env'],
        //   },
        // },
        loader: 'babel-loader',
      },
      {
        test: /\.vue/,
        loader: 'vue-loader',
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
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
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
    new VueLoaderPlugin(),
  ],
}
