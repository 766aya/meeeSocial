module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'index.html'
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
  outputDir: '/dist',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  parallel: undefined,
  css: undefined
}
