const { Configuration, CleanPlugin } = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
/**
 * @type{Configuration}
 */
const config = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    filename: "[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(process.cwd(), "tsconfig.json"),
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  stats:"errors-only",
  devServer:{
    port:8899,
  },
  plugins: [
    new htmlWebpackPlugin({ template: "./public/index.html" }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["running success: http://localhost:8899"],
      },
    }),
  ],
};
module.exports = config;
