const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')

const htmlWebpack = new HtmlWebpackPlugin({
        template: './client/index.html',
        filename: 'index.html',
        inject: 'body'
      })
      // extractSass = new ExtractTextPlugin({
      //   filename: "[name].[contenthash].css",
      //   disable: process.env.NODE_ENV === 'development'
      // })

module.exports = {
  entry: ['./client/app.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'app_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        loader: 'markdown-with-front-matter-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS
        ],
        include: path.resolve('./client/style')
      }
      //, {
      //   test: /\.css/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: 'css-loader',
      //     publicPath: '/dist'
      //   })
      //   include: /style/
      // }
    ]
  },
  plugins: [
    htmlWebpack
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.md', '.scss'],
    modules: [
      'node_modules',
      './client/components'
    ]
  },
  node: {
    fs: 'empty'
  }
}
