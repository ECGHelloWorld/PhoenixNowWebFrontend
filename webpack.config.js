var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: false
});
 
module.exports = {
  entry: [
      'es6-promise',
      './app/index.js'
  ],
  output: { path: __dirname + '/dist', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-object-rest-spread', 'transform-runtime']
        }
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
