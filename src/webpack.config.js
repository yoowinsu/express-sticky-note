var webpack = require('webpack')
var path = require('path')
//var ExtractTextPlugin = require('extract-text-webpack-plugin')
//var autoprefixer = require('autoprefixer')

module.exports = {
    entry: path.join(__dirname, "js/app/index.js"),
    output: {
        path: path.join(__dirname, "../public"),
        filename: "js/index.js"
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
    //         use: ExtractTextPlugin.extract({
    //                 fallback: "style-loader",
                    // use: ["css-loader", "less-loader", "postcss-loader"]
    //             }) //把 css 抽离出来生成一个文件
        }]
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, "js/lib/jquery-2.0.3.min.js"),
            module: path.join(__dirname, "js/module"),
            less: path.join(__dirname, "less")
        }
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery"
    //     }),
    //     new ExtractTextPlugin("css/index.css"),
    //     new webpack.LoaderOptionsPlugin({
    //         options: {
    //             postcss: [
    //                 autoprefixer(),
    //             ]
    //         }
    //     })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
    // ]
};