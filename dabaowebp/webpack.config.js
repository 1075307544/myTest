const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {
  WebpackRunPlugin,
  WebpackDonePlugin,
  loader1,
  loader2,
} = require("./mywebpack.js");
module.exports = {
  mode: "development", //防止代码被压缩
  entry: "./src/index.js", //入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "source-map", //防止干扰源文件
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackRunPlugin(),
    new WebpackDonePlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        minifyCSS: false, // 是否压缩css
        collapseWhitespace: false, // 是否折叠空格
        removeComments: false, // 是否移除注释
      },
    }),
  ],
  devServer: {
    hot: true,
  },
  optimization: {
    usedExports: true,
    minimize: false,
    splitChunks:{
        chunks:"all"
    },
    minimizer: [
      new TerserPlugin({
        parallel: true, // 电脑cpu核数-1
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
};
