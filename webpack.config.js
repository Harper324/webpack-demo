var path = require("path");
var hwp = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [new hwp({ template: path.join(__dirname, "/src/index.html") })],
  mode: "development"
};
