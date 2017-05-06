const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  preserveWhitespace: false,
  cssModules: {
    camelCase: true
  },
  preLoaders: {
    stylus: path.resolve(__dirname, './css-preloader.js')
  },
  loaders: {
    stylus: ExtractTextPlugin.extract({
      loader: 'css-loader?root=./!stylus-loader',
      fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
    })
  }
}
