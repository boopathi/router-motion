const webpack = require('webpack');

const _PROD = process.env.NODE_ENV==='production';
const _DEV = !_PROD;

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: 'public',
    publicPath: 'public',
    filename: '[name].bundle.js'
  },
  devtool: _DEV ? 'cheap-module-inline-source-map' : 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: _DEV ? 'react-hot!babel' : 'babel'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV) }
    })
  ]
};

if (_PROD) module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    conditionals: true,
    unused: true,
    comparisons: true,
    sequences: true,
    dead_code: true,
    evaluate: true,
    if_return: true,
    join_vars: true
  }
}));
