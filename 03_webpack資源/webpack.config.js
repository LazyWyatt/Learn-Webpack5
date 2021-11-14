const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'), //絕對路徑，不能寫相對路徑。
    filename: 'bundle.js',
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
}
