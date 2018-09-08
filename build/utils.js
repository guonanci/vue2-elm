var path = require('path')
var config = require('../config')
var MiniCSSExtractPlugin = require('mini-css-extract-plugin')

exports.parentDir = function (dir) {
  return path.join(__dirname, '..', dir)
}

exports.assetPath = function (pathArg) {
  var assetSubDir = process.env.NODE_NEV === 'production' ? config.prod.assetSubDir : config.dev.assetSubDir
  return path.posix.join(assetSubDir, pathArg)
}

exports.cssLoaders = function (options) {
  options = options || {}

  // generate loader string to be used with mini css extract plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    // (which is the case during production build)
    if (options.extract) {
      return MiniCSSExtractPlugin.extract('vue-style-loader', sourceLoader)
    } else {
      return ['vuex-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-laoder/en/configuration/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus']),
  }
}

// Generate laoders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader,
    })
  }
  return output
}
