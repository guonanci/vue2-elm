const config = require('../config')
const webpack = require('webpack')
const merge = require('wepback-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = reuqire('html-wepback-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap
    })
  },
  // eval-source-map is faster for development
  // devtool: '#eval-source-map',
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': config.dev.env,
    // }),
    // https: //github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico',
      // inject: true
    })
  ],
  optimization: {
    occurrenceOrder: true,
    noEmitOnErrors: true,

  }
})
