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
      // SASS
      {
        test: /(\.css|\.scss)$/,
        include: path.resolve('client/style'),
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
						{
							loader: 'css-loader',
							query: {
								// modules: true,
								sourceMap: true,
								importLoaders: 1,
								// localIdentName: '[name]__[local]__[hash:base64:5]'
							}
						},
						{
							loader : 'sass-loader',
							options: {
								sourceMap: true,
                // includePaths: ['client/style'],
                // data: '@import "imports/base";'
							}
						},
            {
              loader: 'sass-resources-loader',
              options: {
                resources: path.resolve('client/style/imports/_resources.scss')
              },
            }
					]
        }))
      },

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
