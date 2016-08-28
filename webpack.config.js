var path = require('path');
var fs = require('fs');
var glob = require('glob');
var webpack = require('webpack');

module.exports =  {
  target: 'web',
  entry:  path.resolve(__dirname, 'js/client-index'),
  resolve: {
    extensions: ['', '.js', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    publicPath: 'public/dist/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/},
      {test: /\.json$/, loader: 'json'}
    ]
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  },
}
