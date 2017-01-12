var webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: ['webpack-hot-middleware/client', './src/index.js'],
  output: {
    path: __dirname + '/build/js',
    filename: 'bundle.js',
    publicPath: '/public/js'
  },
  devTool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react-hmre']
        }
      }
    ]
  },
  plugins: [
      new CleanWebpackPlugin(['dist', 'build'], {
            verbose: true,
            dry: true
        }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
