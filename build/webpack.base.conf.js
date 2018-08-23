var path = require('path')
var config = require('../config')
var utils = require('../utils')
var projectRoot = pathresolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS Sourcemaps for
// the various precessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.buiild.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.less', '.css', '.scss'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
    }
  }
}
