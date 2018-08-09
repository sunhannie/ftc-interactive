var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin"); 
const extractCSS = new ExtractTextPlugin('one.css'); 
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
// 清除目录等
const cleanWebpackPlugin = require("clean-webpack-plugin");


// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

module.exports = {
    mode: "development", 
    devtool: 'cheap-module-eval-source-map',
    entry:
    {
        'index':['./client/index.js'],
        'signup':['./client/scripts/signup.js']
    },
    output: {
        path: path.resolve(__dirname, 'build/'),  //这儿好像没起作用
        filename: '[name].js', //输出文件名，[name].js默认是main.js。如果指定则是指定名
        // publicPath: '/build/', //这个一定得注意，不加此句，加上html找不到
        chunkFilename: "[chunkhash].js"   //这个好像没起作用，应该研究用处和区别
    },
    module: {
        rules:[
             {
                test: /\.js|\.jsx$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader",
                options: {
                    presets: ['react','es2015']
                },
             },
             {
                test: /\.css$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'style-loader!css-loader?modules&importLoaders&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader?sourceMap=true&sourceMapContents=true',
                // use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
             
             },
             {
                test: /\.json?$/,
                loader: 'json'
             },
             {
                test: /\.html$/,
                use: [
                    "htmllint-loader",
                    {
                        loader: "html-loader",
                        options: {
                        }
                    }
                ]
            },
            {
                test:  /\.scss$/,  
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: [
                    {  
                        loader: 'style-loader'   // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader',  // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: 'sass-loader',  // 将 Sass 编译成 CSS
                        options: { 
                            sourceMap:true  ,
                            sourceMapContents:true
                        }
                    }
                ]
            }
        ]  //end rules    
    },
     resolve: {
        alias: {
            'react': path.join(__dirname,'node_modules','react'),
            "module": path.resolve(__dirname, "node_modules")
        },
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
     performance: {
        hints:  false, // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
    },

    plugins: [
        // 调用之前先清除
	    // new cleanWebpackPlugin(["build"]),
    //    extractCSS,
       new HtmlWebpackPlugin({
           template:'./views/index.html',
           filename:'index.html',
           title:'测试',
           chunks:['index'],
           inject: 'body'
       })
    ],
    // watch: true ,//这意味着在初始构建之后，webpack将继续监视任何已解析文件的更改。手表模式默认关闭
    

     devServer: {
        host:'localhost',
        port:3000,
        contentBase: path.resolve(__dirname, 'build'), // 设置服务器访问的基本目录
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload   
    },
    // 提取js，lib1名字可改
	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			lib1: {
	// 				chunks: "initial",
	// 				name: "jquery",
	// 				enforce: true
	// 			}
	// 		}
	// 	}
	// }
};
