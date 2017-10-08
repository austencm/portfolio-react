const path = require('path'),
      merge = require('webpack-merge'),
      common = require('./common.config.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 8080,
    historyApiFallback: {
      rewrites: [
        // { from: /^\/$/, to: '/views/landing.html' },
        // { from: /^\/subpage/, to: '/views/subpage.html' },
        // { from: /./, to: '/views/404.html' }
      ]
    }
  },
  module: {
    rules: [
      // Images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: path.resolve('client/projects/assets'),
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
            }
          }
        ]
      },
    ]
  }
})
