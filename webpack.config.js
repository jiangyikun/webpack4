const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');//自动在dist中生成html页面并引入相应依赖的js文件
const cleanWebpackPlugin = require('clean-webpack-plugin');//在打包之前清除dist目录中的文件，在开始文件的打包，可以把之前没有使用到的文件删除

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
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //在引入该loader之前，先引入前两个loader，避免在样式文件中相互嵌套引入时，会缺少引入后面的loader
              modules: true //样式文件模块化，引入的样式只在当前模块有效，不会影响到其他模块，css文件引入时需要加上模块名（如 import style './style/scss' class命名时也需加上模块名（style.className））
            }
          },
          "sass-loader",
          "postcss-loader" //自动在css3样式中添加浏览器前缀，需要配置postcss.config.js文件
        ] //loader执行顺序，从下到上，从右到左
      },
      {
        test: /\.(eot|ttf|svg)$/, //通过webpack打包字体文件
        use: "file-loader"
      }
    ]
  }
};
