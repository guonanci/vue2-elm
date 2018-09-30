const config = require('../config')
const utils = require('./utils')
const vueLoaderConfig = require('./vue-loader.conf')


const webpackConfig = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      '@': utils.parentDir('src'),
      'vue$': 'vue/dist/vue.esm.js',
      'assets': utils.parentDir('assets'),
      'store': utils.parentDir('src/store'),
      'pages': utils.parentDir('src/pages'),
      'styles': utils.parentDir('src/styles'),
      'common': utils.parentDir('src/common'),
      'router': utils.parentDir('src/router'),
      'enum$': utils.parentDir('src/common/enum'),
      'components': utils.parentDir('components'),
      'mUtils$': utils.parentDir('src/common/mUtils'),
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
        options: vueLoaderConfig,
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
}

module.exports = webpackConfig
