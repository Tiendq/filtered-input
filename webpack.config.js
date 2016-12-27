module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  entry: './src/filtered-input.js',
  output: {
    filename: 'filtered-input.js',
    path: './dist',
    library: 'FilteredInput',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'validator': 'validator'
  },
  devtool: 'source-map'
};
