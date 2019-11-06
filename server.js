const express = require ('express');
const webpack = reuqire("webpack");
const webpackDevMiddleWare = reuqire('webpack-dev-middleware');//webpack中间件,可以监听到webpack打包文件的变化
const config = require('./webpack.config');
const complier = webpack(config);//随时编译webpack

const app = express();
app.use(webpackDevMiddleWare(complier,{
  publicPath:config.output.publicPath
}))

app.listen(3000,()=>{
  console.log("server is running")
})