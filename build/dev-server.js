require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where app listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)
console.log(webpackConfig)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output && webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
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
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDir)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  const uri = 'http://localhost:' + port
  console.info('Listening at ' + uri + '\n')

  // when env is tesing, dont need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
