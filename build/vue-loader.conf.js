const utils = require('./utils')
const config = require('../config')

const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
   ? config.build.sourceMap
  : config.dev.cssSourceMap


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 10 versions'],
    })
  ],
  plugins: [
  ]
}
