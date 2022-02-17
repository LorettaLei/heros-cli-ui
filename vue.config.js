// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '': {
        target: 'http://127.0.0.1:8080/', // 接口
        // secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            priority: 23
          },
          vconsole: {
            name: 'vconsole',
            test: /[\\/]node_modules[\\/]vconsole[\\/]/,
            priority: 20
          }
        }
      }
    }
  },
  productionSourceMap: process.env.NODE_ENV === 'development'
}
