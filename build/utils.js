var path = require('path')
var config = require('../config')
var MiniCSSExtractPlugin = require('mini-css-extract-plugin')

exports.parentDir = function (dir) {
  return path.join(__dirname, '..', dir)
}

exports.assetsPath = function (pathArg) {
  var assetsSubDir = process.env.NODE_NEV === 'production' ? config.build.assetsSubDir : config.dev.assetsSubDir
  return path.posix.join(assetsSubDir, pathArg)
}

// exports.cssLoaders = function (options) {
//   options = options || {}

//   // generate loader string to be used with mini css extract plugin
//   function generateLoaders (loaders) {
//     var sourceLoader = loaders.map(function (loader) {
//       var extraParamChar
//       if (/\?/.test(loader)) {
//         loader = loader.replace(/\?/, '-loader?')
//         extraParamChar = '&'
//       } else {
//         loader = loader + '-loader'
//         extraParamChar = '?'
//       }
//       return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
//     }).join('!')

//     // (which is the case during production build)
//     if (options.extract) {
//       return MiniCSSExtractPlugin.extract('vue-style-loader', sourceLoader)
//     } else {
//       return ['vue-style-loader', sourceLoader].join('!')
//     }
//   }

//   // http://vuejs.github.io/vue-laoder/en/configuration/extract-css.html
//   return {
//     css: generateLoaders(['css']),
//     postcss: generateLoaders(['css']),
//     less: generateLoaders(['css', 'less']),
//     sass: generateLoaders(['css', 'sass?indentedSyntax']),
//     scss: generateLoaders(['css', 'sass']),
//     stylus: generateLoaders(['css', 'stylus']),
//     styl: generateLoaders(['css', 'stylus']),
//   }
// }
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  var postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return [
        {
          loader: MiniCSSExtractPlugin.loader,
          options: {
          },
        }
      ].concat(loaders)
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
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
      use: loader,
    })
  }
  return output
}
