const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const filename = (ext) => `bundle.${ext}`

module.exports = {
  mode: 'none',

  context: path.resolve(__dirname, 'src'),

  entry: './index.js',

  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'},
      // {test: /\.css$/, use: 'css-loader'},
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    })
  ],

  watch: true,



}
