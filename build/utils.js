var path = require('path')
var config = require('../config')
var MiniCSSExtractPlugin = require('mini-css-extract-plugin')

exports.assetsPlugin = function (_path) {
  var assetsSubDirectory = process.env.NODE_NEV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  // generate loader string to be used with mini css extract plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar

    })
  }
}
