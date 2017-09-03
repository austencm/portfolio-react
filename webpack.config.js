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
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /(\.css|\.scss)$/,
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
								sourceMap: true
							}
						}
					]
        })),
      },

      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader', // creates style nodes from JS strings
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //         modules: true,
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     }, // translates CSS into CommonJS
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     } // compiles Sass to CSS
      //   ],
      //   include: path.resolve('./client/style')
      // }
      //, {
      //   test: /\.css/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: 'css-loader',
      //     publicPath: '/dist'
      //   })
      //   include: /style/
      // },
      {
        test: /\.md$/,
        loader: 'markdown-with-front-matter-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    htmlWebpack,
    new ExtractTextPlugin({
      filename: 'style.css',
      // allChunks: true
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.md'],
    modules: [
      'node_modules',
      './client/components',
      'style'
    ]
  },
  node: {
    fs: 'empty'
  }
}
