//JSON :数据格式
/*
J:Java
S:Script
O:Object
N:Notation
*/
// var dataContainer = document.getElementById('div');
// var btn = document.getElementById('btn');
// var pageCount = 1;
// btn.addEventListener("click",function () {
// 	var xmlHttp;
// 	if (window.XMLHttpRequest) {
// 		xmlHttp = new XMLHttpRequest();
// 	}else{
// 		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	xmlHttp.open("GET","https://learnwebcode.github.io/json-example/animals-1.json",false);
// 	xmlHttp.onload = function () {
// 		//json数据，要使用，现解析
// 		var outDate =JSON.parse(xmlHttp.responseText);
// 		randerHTML(outDate);
// 	}
// 	xmlHttp.send();
// 	pageCount++;
// },false);
// function randerHTML(data) {
// 	// 插入json数据的方法
// 	var str = "";
// 	for (var i = 0; i < data.length; i++) {
// 		str+=data[i].name+"<br>";
// 	};
// 	dataContainer.insertAdjacentHTML("beforeend",str);
// }
// JSONP:是一种手段，解决跨域问题
/*
同源：
同源策略：
1.协议 http https ftp file...
2.域名 www.sohu.com
3.端口 8080 8081 8888
网景：
浏览器：
用户->访问
*/