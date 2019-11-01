//ES module 模块引入方式
// import Header from './header';
// import SideBar from './sideBar';
// import Content from './content';
var image1 = require('./static/images/image1.jpg');
import './index.scss'

console.log(image1);

var root = document.getElementById('root');
var img = new Image();
img.src = image1;
img.classList.add('img');
root.append(img);

// new Header();
// new SideBar();
// new Content(); 