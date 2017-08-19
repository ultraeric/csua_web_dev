const path = require('path');
const webpack = require('webpack');

module.exports = [
{
  entry: {bundle: './src/App.jsx'},
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      static: path.resolve(__dirname, './src/static')
    },
    extensions: [
      '.js', '.jsx', '.css', '.scss'
    ]
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets:[ 'env', 'react']
        }
      }
    ]
  }
}
];
