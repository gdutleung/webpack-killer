const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const { NamedModulesPlugin, HotModuleReplacementPlugin } = webpack;

module.exports = {
    // mode: "production",
    entry: {
        app: "./src/index.js",
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./dist",
        port: "8081",
        host: "0.0.0.0",
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "输出管理",
        }),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
