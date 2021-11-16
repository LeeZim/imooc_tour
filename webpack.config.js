const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    mode: 'development',
    entry: {
        index: './src/pages/index/index.js'
    },
    output: {
        path: resolve('dist'),
        filename:'js/[name].js'
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js'],
        alias: {
            api: resolve('src/api'),
            fonts: resolve('src/assets/fonts'),
            images: resolve('src/assets/images'),
            styles: resolve('src/assets/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages'),
            '@': resolve('src/'),
            js: resolve('src/js')
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
    ],
    node: {
        fs: 'empty'
    }
}