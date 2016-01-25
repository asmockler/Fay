'use strict';

var webpack = require('webpack'),
              HtmlWebpackPlugin = require('html-webpack-plugin'),
              path = require('path'),
              srcPath = path.join(__dirname, 'test');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    module: path.join(srcPath, 'app.js'),
    common: ['react', 'react-dom']
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'tmp'),
    publicPath: '',
    filename: '/[name].js',
    library: ['Example', '[name]'],
    pathInfo: true
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] }},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.sass$/, loader: 'style!css!sass'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', '/common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './tmp',
    historyApiFallback: true
  }
};
