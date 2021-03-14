const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = path.join(__dirname, 'src');
const pubPath = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  output: {
    path: pubPath,
    filename: '[name].[hash].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'html', 'index.html'),
      filename: path.join(pubPath, 'index.html'),
      favicon: path.join(srcPath, 'favicon.ico')
    }),
    new CopyWebpackPlugin([
      { from: path.join(srcPath, 'images'), to: 'images' },
    ]),
  ],
};
