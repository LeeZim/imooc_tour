const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.resovle(__dirname, dir);

module.exports = {
    mode: 'development',
    entry: {
        index: './js/index.js',
        list: './js/list.js'
    },
    output: {
        path: resolve('dist'),
        filename:'js/[name].js'
    },
    devtools: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js'],
        alias: {
            api: resolve('src/api'),
            fonts: resolve('src/assets/fonts'),
            images: resolve('src/assets/images'),
            styles: resolve('src/assets/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]',
                    esModule: false
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'font/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index/index.art',
            chunks: ['index']
        })
    ]
}