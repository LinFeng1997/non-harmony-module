"use strict";

const path = require("path");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.js"),
  devtool: false,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  target: ["web", "es5"],
};
