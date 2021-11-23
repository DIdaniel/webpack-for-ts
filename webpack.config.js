const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.export = {
  plugin: [
    new HtmlWebpackPlugin({
      tempalte: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
