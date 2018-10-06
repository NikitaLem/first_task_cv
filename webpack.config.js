var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.styl$/, 
        use: ['style-loader', 'css-loader?url=false', 'stylus-loader']
      },
      {
        test: /\.pug$/,
        use: ['raw-loader', 'pug-html-loader']
      },
      {
        test: /node_modules\/JSONStream\/index\.js$/,
        loaders: ['shebang', 'babel']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        query:{
          limit: '100000',
          name:'[name].[ext]',
          outputPath:'fonts/'
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property 
        loader:"file-loader",
        query:{
          name:'[name].[ext]',
          outputPath:'images/'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    stats: "errors-only"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'For Lera',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: 'src/index.pug',
    })
  ]
};