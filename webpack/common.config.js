const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve('client/app.js')
  },

  module: {
    rules: [
      // JS/JSX
      {
        test: /\.js[x]?$/,
        include: [path.resolve('client/app.js'), path.resolve('client/components')],
        loader: 'babel-loader'
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
                resources: path.resolve('client/style/imports/_resources.scss')
              },
            }
					]
        }))
      },

      // Fonts
      {
        test: /(\.eot|\.ttf|\.woff[2]?)$/,
        include: path.resolve('client/fonts'),
        loader: 'file-loader'
      },

      // Markdown
      {
        test: /\.md$/,
        include: path.resolve('client/projects/data'),
        loader: 'markdown-with-front-matter-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [
      path.resolve('node_modules'),
      path.resolve('custom_modules'),
      path.resolve('plugins'),
      path.resolve('client/components'),
      path.resolve('client/style')
    ]
  },

  node: {
    fs: 'empty'
  },

  plugins: [
    // new webpack.EnvironmentPlugin([
    //   'NODE_ENV',
    // ]),
    new HtmlWebpackPlugin({
      template: path.resolve('client/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
  ],

  // output: {
  //   output: {
  //     path: 'docs',
  //     filename: '[name].bundle.[chunkhash].js',
  //   },
  //   path: path.resolve(__dirname, 'docs')
  // },


}
