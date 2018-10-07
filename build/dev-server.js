var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where app listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
  },
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reaload',
    })
    cb()
  })
})

var context = config.dev.context
var proxypath
switch (process.env.NODE_ENV) {
  case 'local':
    proxypath = 'http://localhost:8001'
    break
  case 'online':
    proxypath = 'http://elm.cangdu.org'
    break
  default:
    proxypath = config.dev.proxypath
}
var options = {
  target: proxypath,
  changeOrigin: true,
}
if (context.length) {
  app.use(proxyMiddleware(context, options))
}

// handle falllback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// app webapck bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// app pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDir)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.info('Listening at ' + uri + '\n')

  // when env is tesing, dont need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
