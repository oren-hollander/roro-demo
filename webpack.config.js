const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const parts = require('./webpack.parts');

const app = path.join(__dirname, 'app')
const build = path.join(__dirname, 'build')

const commonConfig = merge(
  {
    entry: {
      app
    },
    output: {
      path: build,
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo'
      })
    ]
  },
  parts.lintJavaScript,
  parts.loadJavaScript({include: app})
)

const productionConfig = merge([
  parts.clean(build),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.extractBundles([{
    name: 'vendor',
    minChunks: ({resource}) => resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js$/)
  }])
])

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' })  
])

module.exports = env => env === 'production' 
  ? merge(commonConfig, productionConfig) 
  : merge(commonConfig, developmentConfig)