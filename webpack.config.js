const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      // TextToSVGPlugin = require('./plugins/text-to-svg-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  entry: ['./client/app.js'],
  output: {
    path: path.resolve('docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // JS/JSX
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

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
                resources: './client/style/imports/_resources.scss'
              },
            },
					]
        })),
      },

      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   exclude: /node_modules/,
      //   loaders: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash].[ext]',
      //       },
      //     }
      //   ]
      // },

      // Images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              // name: './images/[name].[hash].[ext]',
              name: '[path][name].[ext]'
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
      },

      // Fonts
      {
        test: /(\.eot|\.ttf|\.woff[2]?)$/,
        loader: 'file-loader'
      },

      // Markdown
      {
        test: /\.md$/,
        loader: 'markdown-with-front-matter-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      // allChunks: true
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [
      'node_modules',
      'custom_modules',
      'plugins',
      './client/components',
      './client/style'
    ]
  },
  node: {
    fs: 'empty'
  }
}
