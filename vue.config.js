const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  filenameHashing: true,
  lintOnSave: false,
  publicPath: '',
  devServer: {
    https: false
  },
  transpileDependencies: [
    "vue-awesome"
  ],
  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  },
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader');

    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /inline/,
              use: [
                'babel-loader',
                'vue-svg-loader',
              ],
            },
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[hash:8].[ext]',
                esModule: false,
              }
            }
          ]
        }
      ]
    }
  }
})
