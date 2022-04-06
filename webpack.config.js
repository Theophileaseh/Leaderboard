const path = require('path')

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ]
  },

  // this shows the source of each file on the console
  devtool: 'source-map',


  // local server
  devServer: {
    static: './dist'
  }
}