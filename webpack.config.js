const path = require('path')

module.exports = {
  entry: './resources/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}
