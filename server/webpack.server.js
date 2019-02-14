const path = require("path");

module.exports = {
  // Inform weboack that we are building bundle for nodejs not browser
  target: "node",
  // entry Root file of server application
  entry: "./src/index.js",
  // Where to put output fle after generation
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  // tell to run babel on every file it goes through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
