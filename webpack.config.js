const path = require('path');
const html_plugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [new html_plugin({ template: './src/index.html' })]
}