const config = require('../config')
const utils = require('../utils')

const env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS Sourcemaps for
// the various precessor loaders added to vue-loader at the end of this file
const cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
const cssSourceMapProd = (env === 'production' && config.build.sourceMap)
const useCssSourceMap = cssSourceMapDev || cssSourceMapProd

const webpackConfig = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.vue', '.scss', ''],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.parentDir('src'),
      'assets': utils.parentDir('assets'),
      'components': utils.parentDir('components'),
      'router': utils.parentDir('src/router'),
      'store': utils.parentDir('src/store'),
      'styles': utils.parentDir('src/styles'),
      'common': utils.parentDir('src/common'),
      'service$': utils.parentDir('src/common/service'),
      'util$': utils.parentDir('src/common/util'),
      'enum$': utils.parentDir('src/common/enum'),
      'pages': utils.parentDir('src/pages'),
    },
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [{
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        include: [utils.parentDir('src'), utils.parentDir('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: !config.dev.showEslintErrorsInOverlay,
        }
      }] : []),
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: [utils.parentDir('src')],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [utils.parentDir('src'), utils.parentDir('test')],
        exclude: [utils.parentDir('node_modules')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        include: [utils.parentDir('src')],
        use: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:6].[ext]'),
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: 'url-loader',
        options: {
          limit: 1000,
          name: utils.assetsPath('media/[name].[hash:6].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: 'url-loader',
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
      })
    ],
  },
}

module.exports = webpackConfig
