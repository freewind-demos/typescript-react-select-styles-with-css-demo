const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/entry.tsx',
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }, {
      test: /\.pcss$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'postcss-loader'}
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
