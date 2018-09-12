const path = require('path')
const config = require('../config')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./wepack.base.conf')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const env = config.prod.env

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.prod.sourceMap,
      extract: true,
    })
  },
  output: {
    path: config.prod.assetRoot,
    filename: utils.assetPath('js/[nname].js'),
    chunkFilename: utils.assetPath('js/[name].[chunkHash].min.js'),
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.prod.sourceMap
    })
  }
})
