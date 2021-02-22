const path = require ('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
module.export = {
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        compress:true,
        publicPath: 'dist',
        writeToDisk:true
    },
    entry: '.src/js/app.js',
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: 'dist'
    },
    module:{
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader:'postcss-loader',
                        options: {
                            plugins: function() {
                                return[
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            }
        ]
    }
}