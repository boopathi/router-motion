module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: 'public',
    publicPath: 'public',
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      }
    ]
  }
};
