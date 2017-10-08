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
