const path = require("path");

module.exports = {
  mode: "development", //production生产环境
  entry: "./src/index.js",
  output: {
    filename: "min.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader", //url-loader可以打包成base64的图片，仅推荐占用大小不大的图片使用，要不然加载js文件会很长，有点可以网页图片的http请求
          options: {
            name: "[name]_[hash].[ext]", // 打包出的图片名字规范
            outputPath: "images/", //打包出文件的文件夹
            limit: 2048 //表示图片超过2948字节(2kb)就会单独打包出来不会打包成base64放到js文件中
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader", 
          "postcss-loader",//自动在css3样式中添加浏览器前缀
        ] //loader执行顺序，从下到上，从右到左
      }
    ]
  }
};
