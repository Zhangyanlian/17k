// webpack 配置文件

//处理文件打包和模块化开发
//js 处理 ES6 ES7 jsx 语法
//图片处理 png gif jpg iconfont
//样式处理 less css scss
//string


var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin")
var openBrowserWebpackPlugin = require("open-browser-webpack-plugin");
var extractTextWebpackPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");



module.exports = {
    entry: ["./src/main.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[hash:8].js",
        publicPath: "",
    },
    devtool: "source-map",
    resolve: {
        alias: {
            "@": path.resolve("src"),
        }
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:8192,
                        name:"imgs/[name].[hash:8].[ext]"
                    }
                }]
            },
            {
                test:/\.(css|scss)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        "css-loader",
                        {
                            loader:"postcss-loader",
                            options:{
                                plugins:function(){
                                    return[
                                        require("cssgrace"),
                                        require("autoprefixer"),
                                        require("postcss-px2rem-exclude")(
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/i
                                            }
                                        )
                                    ]
                                }
                            }
                        },
                        "sass-loader"
                    ]
                })

            },
            {
                test:/\.(css|less)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        "css-loader",
                        {
                            loader:"postcss-loader",
                            options:{
                                plugins:function(){
                                    return[
                                        require("cssgrace"),
                                        require("autoprefixer"),
                                        require("postcss-px2rem-exclude")(
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/i
                                            }
                                        )
                                    ]
                                }
                            }
                        },
                        "sass-less"
                    ]
                })

            }
        ]
    },


    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "0.0.0.0",
        port: 3000,
        compress: true,
        hot: true,
        inline: true,
        publicPath: "",
        proxy: { //反向代理
            "/vue": {
                target: "http://localhost:1901/",
                changeOrigin: true,
            },
            "/myreact":{
                target: "http://localhost:1901/",
                changeOrigin: true,
            }
        }
    },
    plugins: [
        new openBrowserWebpackPlugin({ url: "http://localhost:3000" }),

        new htmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
        }),

        new extractTextWebpackPlugin({
            filename: "css/app.[hash:8].css",
            allChunks: true,
            disable: false
        }),

        new webpack.ProvidePlugin({
            React:"React",
            Component:['react','Component']
        })
    ]
}