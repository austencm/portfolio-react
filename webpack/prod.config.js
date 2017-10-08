const path = require('path'),
      webpack = require('webpack'),
      merge = require('webpack-merge'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      common = require('./common.config.js')

module.exports = merge(common, {
  devtool: 'source-map',
  // devServer: {
  //   contentBase: path.resolve('docs')
  // },
  output: {
    path: path.resolve('docs'),
    filename: '[name].bundle.[hash].js',
  },
  plugins: [
    // Enable production env var
    new webpack.EnvironmentPlugin({
      'NODE_ENV': 'production'
    }),
    // Minify JS
    new UglifyJSPlugin({
      sourceMap: true,
      compress: true,
    }),
    // Extract imported CSS into own file
    // new ExtractTextPlugin('[name].bundle.[chunkhash].css'),

    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),

    new CopyWebpackPlugin([
      { from: path.resolve('CNAME') },
    ])
  ],
  module: {
    rules: [
      // SASS
      {
        test: /(\.css|\.scss)$/,
        include: path.resolve('client/style'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
						{
							loader: 'css-loader',
							query: {
								// modules: true,
								sourceMap: false,
								importLoaders: 1,
								// localIdentName: '[name]__[local]__[hash:base64:5]'
							}
						},
						{
							loader : 'sass-loader',
							options: {
								sourceMap: false,
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
        })
      },

      // Images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: path.resolve('client/projects/assets'),
        loaders: [
          {
            loader: 'file-loader',
            options: {
              // name: './images/[name].[hash].[ext]',
              name: '[name].[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              // optipng: {
              //   optimizationLevel: 2,
              // },
              pngquant: {
                quality: '65-80',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      }
    ]
  }
})
