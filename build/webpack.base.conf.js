var config = require('../config')
var utils = require('../utils')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS Sourcemaps for
// the various precessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.prod.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

const webpackConfig = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.prod.assetsRoot,
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.vue', '.scss', ''],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.parentDir('src'),
      'asset': utils.parentDir('asset'),
      'component': utils.parentDir('component'),
      'router': utils.parentDir('src/router'),
      'store': utils.parentDir('src/store'),
      'style': utils.parentDir('src/style'),
      'common': utils.parentDir('src/common'),
      'service$': utils.parentDir('src/common/service'),
      'util$': utils.parentDir('src/common/util'),
      'enum$': utils.parentDir('src/common/enum'),
      'page': utils.parentDir('src/page'),
    },
  },
  module: {
    loaders: [
      ...(config.dev.useEslint ? [{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: [utils.parentDir('src'), utils.parentDir('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: !config.dev.showEslintErrorsInOverlay,
        }
      }] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [utils.parentDir('src')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [utils.parentDir('src'), utils.parentDir('test')],
        exclude: [utils.parentDir('node_modules')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        include: [utils.parentDir('src')],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetPath('img/[name].[hash:6].[ext]'),
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: utils.assetsPath('media/[name].[hash:6].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:6].[ext]'),
        },
      }
    ],
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: useCssSourceMap,
    }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 10 versions'],
      }),
    ],
  },
}

module.exports = webpackConfig
