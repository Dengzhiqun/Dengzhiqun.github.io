var webpack = require('webpack');
module.exports = {
    // devtool: 'eval-source-map',
    entry:  "./src/script-1.js",//已多次提及的唯一入口文件
    output: {
        path: "dist",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
