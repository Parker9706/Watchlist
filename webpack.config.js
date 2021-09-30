const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        proxy: {
          '/': 'http://localhost:3000',
        },
    },
    module : {
        rules : [
            {test : /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
            {test : /\.(css|scss)$/, use:['style-loader', 'css-loader'], exclude: /node_modules/}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ],
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
      },
};