const moment = require('moment');
const path = require('path');

const buildDate = moment().format('YYYYMMDDhhmmss');

module.exports = {
  publicPath: "./",
  // assetsDir: "static",
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === "development",
  css: {
    extract: {
      filename: `css/[name].${buildDate}.css`,
      chunkFilename: `css/[name].${buildDate}.css`,
    },
  },
  devServer: {
    port: "9999",
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true
  },
  configureWebpack: {
    output: {
      filename: `js/[name].${buildDate}.js`,
      chunkFilename: `js/[name].${buildDate}.js`,
    },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      // 为开发环境修改配置...
      config.devtool = "eval-source-map";
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '应聘前端 - 邱建强 - 2年经验'
        return args
      })

    // GraphQL Loader
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // 消耗性能
  }
};