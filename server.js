/* eslint no-console: 0 */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]*/

const webpack = require('webpack');
const config = require('./webpack.dev.config');
const express = require('express');

const app = express();
const port = 3000;

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { colors: true },
}));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎 Listening at http://localhost:%s', port);
  }
});
