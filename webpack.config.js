const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development'
const devtool = devMode ? 'source-map' : false

module.exports = {
    mode,
    target: 'web',
    devtool,
    devServer: {
        port: 3000,
        open: true,
    },
    entry:
        [path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'virtual-keyboardEn'),
        clean: true,
        filename: 'index.js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
    module:
        {
            rules: [
                {
                    test: /\.html$/i,
                    loader: 'html-loader'
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [require('postcss-preset-env')]
                                }
                            }
                        },
                        "sass-loader",
                    ],
                },
                // {
                //     test: /\.(?:js|mjs|cjs)$/,
                //     exclude: /node_modules/,
                //     use: {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: [
                //                 ['@babel/preset-env', {targets: "defaults"}]
                //             ]
                //         }
                //     }
                // },

            ]
        }
    ,


}
;

