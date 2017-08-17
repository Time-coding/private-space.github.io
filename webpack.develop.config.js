    //web开发时的配置文件

    // webpack开发时候的配置文件
    // 引入path模块
    var path = require('path')
    var webpack=require('webpack')

    module.exports = {
        //webpack中的三大亮点之一:   入口出口设置
        entry: path.resolve(__dirname, './src/main.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        // webapck中的第二个亮点: 加载器loader
        module: {
            rules: [
                // babel-loader的加载器信息 把es6转成es5
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                },
                // 解析css 的加载器
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                // vue-loader的加载器信息
                {
                    test: /\.vue$/,
                    use: {
                        loader: 'vue-loader'
                    }
                },
                //解析图片加载器
                 {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                     {
                        loader: 'url-loader',
                        options: {
                        limit: 8192
                            }  
                        }
                    ]
                },
                // 使用url-loader加载器  字体
                {
                    test: /\.(woff|svg|eot|ttf)\??.*$/,
                    use: 'url-loader'
                }

            ]
        },
        devtool:'evel',
        devServer:{
            contentBase:path.resolve(__dirname, 'src'),
            hot:true,   //热更新
            port:8070,   //定义端口号
            host:'localhost',
            open:true,
            openPage:''
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin()
        ]
    }
