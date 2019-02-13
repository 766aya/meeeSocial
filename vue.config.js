module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'index.html'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://rest.apizza.net/mock/db091d195cf63d55a8a1575f696ba9e5',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/server': {
        target: 'http://123.157.68.243:10014/',
        changeOrigin: true,
        pathRewrite: {
          '^/server': '/'
        }
      }
    }
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT'
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  transpileDependencies: ['avue-plugin-transfer'],
  pwa: {
    // 配置 workbox 插件
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  },
  outputDir: './dist',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  parallel: undefined,
  css: undefined
}
