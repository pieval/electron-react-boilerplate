/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]*/

const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: [
    `webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr`, // eslint-disable-line
    'react-hot-loader/patch',
    './app/index.js',
  ],

  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/dist/',
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') },
    }),
  ],

  target: 'electron-renderer',
};
