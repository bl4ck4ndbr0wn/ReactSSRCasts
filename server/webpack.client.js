const path = require("path");

module.exports = {
  // entry Root file of server application
  entry: "./src/client/client.js",
  // Where to put output fle after generation
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
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
