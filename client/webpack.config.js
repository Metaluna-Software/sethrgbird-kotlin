const Autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const rtl = require('@mjhenkes/postcss-rtl');

const srcPath = path.join(__dirname, 'src');
const pubPath = path.join(__dirname, 'build');

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      oneOf: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'global',
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    rtl(),
                    Autoprefixer(),
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|otf|eot|ttf|woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext][query]'
          },
        }],
    }],
  },
  output: {
    path: pubPath,
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: '',
    assetModuleFilename: 'assets/[name][[ext][query]'
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: { '^/api': '' },
      },
      '/index.html': {
        bypass: (req, res) => {
          res.setHeader('Content-Type', 'text/html');
          return '/index.html';
        },
      },
    },
    contentBase: pubPath,
    open: true,
    openPage: 'http://localhost:3000',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'html', 'index.html'),
      filename: path.join(pubPath, 'index.html'),
      favicon: path.join(srcPath, 'favicon.ico'),
      chunks: ['raf', 'babel-polyfill', 'main'],
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[chunkhash].css',
      chunkFilename: '[name]-[chunkhash].css',
      ignoreOrder: true,
    }),
  ],
};
