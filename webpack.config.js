const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const devConfig = require("./.env.json");
const prodConfig = require("./.env.production.json");
const env = () => process.env.NODE_ENV === "production" ? JSON.stringify(prodConfig) : JSON.stringify(devConfig);

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.bundle.js",
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // This is required for asset imports in CSS, such as url()
                        options: {publicPath: ""},
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '_assets/'    // where the fonts will go
                        // publicPath: PROD_ASSETS_DIR       // override the default path
                    }
                }],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            "process.env": env()
        }),
    ],
};
