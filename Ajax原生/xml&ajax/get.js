//Ajax
/*
	html css js xmlhttprequest php

*/
// //1.创建xmlhttprequest对象
// var xmlHttp = createXmlHttpRequestObject();
// function createXmlHttpRequestObject() {
// 	var xmlHttp;
// 	//处理兼容
// 	if (window.ActiveXObject) {//IE
// 		try{
// 			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
// 		}catch(e){
// 			alert(e);
// 			xmlHttp = false;
// 		}
// 	}else{//其他浏览器
// 		try{
// 			xmlHttp = new XMLHttpRequest();
// 		}catch(e){
// 			alert(e);
// 			xmlHttp = false;
// 		}
// 	}
// 	if (!xmlHttp) {
// 		alert("不能创建这个对象");
// 	}else{
// 		return xmlHttp;
// 	}
// }
// //2.与服务器建立通讯
// function process(){
// 	if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
// 		// 拿到用户输入的内容
// 		var foodValue = document.getElementById('userinput').value;
// 		//2.1配置xmlhttp对象
// 		xmlHttp.open("GET","get.php?food="+foodValue,true);
// 		// 2.2发送请求
// 		xmlHttp.send(null);
// 		//2.3监听状态码
// 		xmlHttp.onreadystatechange = handleSeverResponse;
// 	} else {
// 		setTimeout("process()",1000);
// 	}
// }
// //3.处理响应
// function handleSeverResponse(){
// 	//如果状态码 == 4 说明与服务器建立连接 并且服务器尝试返回数据
// 	if (xmlHttp.readyState == 4 ) {
// 		// 判断网络传输的状态码
// 		if (xmlHttp.status == 200) {
// 			//建返回的数据展示到页面中
// 			var xmlResponse = xmlHttp.responseXML;
// 			//解析xml数据
// 			var xmlDocumentElement = xmlResponse.documentElement;
// 			//拿到xml中的数据
// 			var massage = xmlDocumentElement.firstChild.data;
// 			//展示到前台页面
// 			document.getElementById('underinput').innerHTML = "<span style='color:blue'>"+massage+"</span>";
// 			setTimeout("process()",1000);
// 		} 
// 	}
// }
//简化版
function httpGet(str,completeCallback,errorCallback){
	// 1. 创建xmlhttprequest对象
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject();
	}
	xmlHttp.open("GET","get.php?food=" + str,true);
	xmlHttp.send(null);
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4) {
			if (xmlHttp.status == 200) {
				if (completeCallback) {
					completeCallback(xmlHttp.responseText);
				}
			} 
		} else {
			if (errorCallback) {
				errorCallback(xmlHttp.status);
			}
		}
	}
}
var userinput = document.getElementById('userinput');
var underinput = document.getElementById('underinput');
userinput.onkeyup = function () {
	httpGet(this.value,successCallback,errorCallback);
	function successCallback(responseText) {
		underinput.innerHTML = responseText;
	}
	function errorCallback(status) {
		underinput.innerHTML = status;
	}
}