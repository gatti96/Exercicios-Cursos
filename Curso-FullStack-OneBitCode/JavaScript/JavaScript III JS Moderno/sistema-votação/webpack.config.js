const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/vote.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Sistema votação",
      hash: true,
      cache: true,
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["home"],
    }),
  ],
};
