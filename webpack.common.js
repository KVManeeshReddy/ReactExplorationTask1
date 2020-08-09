const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
       path: path.resolve( __dirname, 'dist' ),
       filename: 'main.js',
       publicPath: '/',
    },
    module: {
        rules: [
           {
              test: /\.js$/,
              exclude: '/node_modules/',
              use: 'babel-loader',
           },
           {
              test: /\.css$/,
              exclude: '/node_modules/',
              use: ['style-loader', 'css-loader']
           },
           {
              test: /\.(png|j?g|svg|gif)?$/,
              exclude: '/node_modules/',
              use: 'file-loader'
           }
        ]
     },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        }),
  ],
};