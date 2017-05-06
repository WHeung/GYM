const path = require('path')
const vueConfig = require('./vue-loader.config')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')
const timeStamp = ((new Date()).getTime() + '').substring(8)

const config = {
  devtool: '#source-map',
  entry: {
    app: './src/app.js',
    vendor: [
      'es6-promise',
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync',
      'axios'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: './',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      // for img tag use
      'public': path.resolve(__dirname, '../src/public'),
      // for css use
      '~public': path.resolve(__dirname, '../src/public'),
      // for import use
      '~src': path.resolve(__dirname, '../src')
    }
  },
  externals: {
    'BMap': 'BMap'
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'stage-3']
        }
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  plugins: [
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // generate output HTML
    new HTMLPlugin({
      template: 'src/index.html',
      title: timeStamp,
      env: process.env.NODE_ENV
    }),
    new ExtractTextPlugin('styles.[hash].css')
  ]
}

if (process.env.NODE_ENV === 'development') {
  // 添加环境变量，比如安卓的webviewBridge
  config.entry.app = ['./src/env-mock/index.js', './src/app.js']
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  )
}

if (process.env.NODE_ENV === 'test') {
  // delete config.devtool
  config.output.path = path.resolve(__dirname, '../static/')
  config.output.publicPath = './'
  // 官网直销
  // config.output.path = path.resolve(__dirname, '../dist/official-order')
  // config.output.publicPath = '/dwf/public/official-order/'

  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HTMLPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, '../dist/index.html'),
      title: timeStamp
    })
  )
}

// production start
if (process.env.NODE_ENV === 'production') {
  delete config.devtool
  config.output.path = path.resolve(__dirname, '../static/')
  config.output.publicPath = './'
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        'drop_debugger': true,
        'drop_console': true
      }
    }),
    new HTMLPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, '../dist/index.html'),
      title: timeStamp
    }),
    new WebpackShellPlugin({
      onBuildStart: ['echo "Webpack Start PRO 😄 ' + timeStamp],
      onBuildEnd: [
        'echo "Webpack PRO End 😄 ' + timeStamp
      ]
    })
  )
}
// production end

module.exports = config
