const path = require('path')

module.exports = {

  dev: {
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    mode: 'development',
    useEslint: true,
    showEslintErrorsInOverlay: false,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 7777,
    assetsSubDir: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/shopping': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/shopping': '/shopping' }
      },
      '/ugc': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/ugc': '/ugc' }
      },
      '/v1': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/v1': '/v1' }
      },
      '/v2': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/v2': '/v2' }
      },
      '/v3': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/v3': '/v3' }
      },
      '/v4': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/v4': '/v4' }
      },
      '/bos': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/bos': '/bos' }
      },
      '/member': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/member': '/member' }
      },
      '/promotion': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/promotion': '/promotion' }
      },
      '/eus': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/eus': '/eus' }
      },
      '/payapi': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/payapi': '/payapi' }
      },
      '/img': {
        'target': 'http://elm.cangdu.org', // 范伟杰
        // 'target': 'https://ccc.xinyan.com', // 生产
        'changeOrigin': true,
        'pathRewrite': { '^/img': '/img' }
      },
    },
    context: [ // proxy path
      '/shopping',
      '/ugc',
      '/v1',
      '/v2',
      '/v3',
      '/v4',
      '/bos',
      '/member',
      '/promotion',
      '/eus',
      '/payapi',
      '/img',
    ],
    proxypath: 'http://cangdu.org:8001',
    // CSS Sourcemaps off by default becase relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experiences, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    mode: '"production"',
    index: path.resolve(__dirname, '../elm/index.html'),
    assetsRoot: path.resolve(__dirname, '../elm'),
    assetsSubDir: 'static',
    assetsPublicPath: '/elm/',
    sourceMap: true,
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    gzip: false,
    gzipExts: ['js', 'css'],
  },
}
