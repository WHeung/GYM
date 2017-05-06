// var path = require('path')
// var fs = require('fs')
var webpackConfig = require('./webpack.config.js')
// var ncp = require('ncp').ncp
// ncp.limit = 32

module.exports = function (source) {
  var alias = webpackConfig.resolve.alias
  source = source.replace(/url\([^\)]+\)/g, function (whole) {
    for (const key in alias) {
      if (key.indexOf('~') > -1) {
        whole = whole.replace(key, alias[key])
      }
    }

    // var absPath = path.join(srcPath, m1)
    // var filaName = m1.match(/[^\/]+\.(png|jpg)$/)[0]
    // var distPath = path.join(webpackConfig.output.path, filaName)
    // var content = fs.readFileSync(absPath)

    // windows 路径符号兼容
    whole = whole.replace(/\\/g, function (whole) {
      return '/'
    })
    // console.log(whole, '========css-preloaders @line 25=================================================================')
    return whole
  })
  return source
}
