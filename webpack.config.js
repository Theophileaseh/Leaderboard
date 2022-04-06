const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry:['babel-regenerator-runtime', './src/index.js'],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Leaderboard',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  // this shows the source of each file on the console
  devtool: 'source-map',

  // local server
  devServer: {
    static: './public',
  },
};