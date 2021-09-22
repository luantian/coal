

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// const IS_IE_DEV = Boolean(process.env.IE_DEV);

module.exports = {
  productionSourceMap: false,
  outputDir: 'coal',
  // 打包app时放开该配置
  publicPath: '/',

  // webpack 配置
  configureWebpack: config => {
    // 生产环境取消 console.log
    if (IS_PRODUCTION) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
 },

  css: {
    sourceMap: !IS_PRODUCTION,
    loaderOptions: {
      sass: {
        data: `@import "@/style/var.scss";`
      }
    }
  },

  devServer: {
    proxy: {
      '/api': { //使用"/api"来代替"http://f.apiplus.c"
        target: 'http://172.24.4.237:8020', //源地址
        changeOrigin: true, //改变源
        pathRewrite: {
          '^/api': '/' //路径重写
        }
      },
    }
  }
};
