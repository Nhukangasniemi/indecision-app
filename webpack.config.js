const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader', //teach webpack how to use babel
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, //css-loader take in css and converted it to JS representation
      use: [
        'style-loader', //inject it to the DOM under <style> tag
        'css-loader',
        'sass-loader'
      ]
    }]
  }, 
  devtool: 'cheap-module-eval-source-map', //help to debug and show bugs in source code
  devServer: { //same like live-server but have webpack feature
    contentBase: path.join(__dirname, 'public') 
  }
};
