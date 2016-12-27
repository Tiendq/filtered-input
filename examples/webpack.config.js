module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: "./dist",
    publicPath: "/dist"
  },
  resolve: {
    fallback: "/usr/local/lib/node_modules"
  }
};
