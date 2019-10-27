const path = require("path");

module.exports = {
  mode:'development',//production生产环境
  entry: './src/index.js',
  output: {
    filename: "min.js",
    path: path.resolve(__dirname, "dist")
  },
  module:{
    rules:[{
      test:/\.jpg$/,
      use:{
        loader:'file-loader'
      }
    }]
  }
};
