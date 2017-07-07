var webpack = require('webpack'),
    path = require('path'),
    extend = require('extend'),
    projectName = require("./package.json").name,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    pxtorem = require('postcss-pxtorem');

module.exports = {
    entry: {
        'phoenix-styles': './less/phoenix-styles.less', 
        'ios-skin': './less/ios-skin.less'
    },
    output: {
        path: path.join(process.cwd(),'dist'),
        filename: '[name].css'
    },
    module: {
        loaders:[
            {
                test:/\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader", {publicPath: './iconfont/'})
            },
            {
                test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=[name].[ext]&outputPath=./iconfont/'
            }
        ]
    },
    postcss: [
        pxtorem({
            rootValue: 100,
            propWhiteList: []
        })
    ],
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}