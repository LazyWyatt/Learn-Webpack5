const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'), //絕對路徑，不能寫相對路徑。
    filename: 'bundle.js',
  },
}
