//ES module 模块引入方式
// import Header from './header';
// import SideBar from './sideBar';
// import Content from './content';
var image1 = require('./static/images/image1.jpg');
import style from './index.scss'
import './index.css'

console.log(image1);

var root = document.getElementById('root');
var img = new Image();
img.src = image1;
img.classList.add(style.img);
root.append(img);

var btn = document.createElement('button');
btn.innerText = '点击按钮';
var num = 1;
btn.onclick = function(){
  var div = document.createElement('div');
  div.innerHTML = num++;
  document.body.appendChild(div);
}
document.body.appendChild(btn);

// new Header();
// new SideBar();
// new Content(); 