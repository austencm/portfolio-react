const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      // TextToSVGPlugin = require('./plugins/text-to-svg-plugin'),
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
      },

      // Image optimization
      // TODO: make sure this is working
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    htmlWebpack,
    // new TextToSVGPlugin,
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
