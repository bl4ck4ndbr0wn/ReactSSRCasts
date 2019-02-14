const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Inform weboack that we are building bundle for nodejs not browser
  target: "node",
  // entry Root file of server application
  entry: "./src/index.js",
  // Where to put output fle after generation
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
