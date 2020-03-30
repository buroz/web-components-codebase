const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: "source-map",
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                tailwindcss({
                  variants: ["responsive", "group-hover", "hover", "focus", "active"]
                }),
                autoprefixer
              ]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new MiniCssExtractPlugin()
  ],
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "public")
  }
  /*
  devServer: {
    contentBase: [resolve(__dirname, "public"), resolve(__dirname, "dist")],
    compress: false,
    port: 8080
  }
  */
};
