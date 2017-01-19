var webpack = require('webpack')
var config = require('./webpack.dev.config')

var express = require('express')
var app = express()
var port = 3000

var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath,
      historyApiFallback: true,
      stats: { colors: true }
    }
    ));
  app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎 Listening at http://localhost:%s", port)
  }
})
