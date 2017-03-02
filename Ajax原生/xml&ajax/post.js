function httpPost(url,postbody,completeCallback,errorCallback) {
	var xmlHttp;
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	};
	xmlHttp.open("POST",url,true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(postbody);
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4) {
			if (xmlHttp.status == 200) {
				if (completeCallback) {
					completeCallback(xmlHttp.responseText);
				}
			}
		}else{
			if (errorCallback) {
				errorCallback(xmlHttp.status);
			}
		}
	}
}
var btn = document.getElementById('btn');
var p = document.getElementById('p');
btn.onclick = function () {
	var url = "post.php";
	var postbody = "username=Henty&password=123456";
	httpPost(url,postbody,successCallback,errorCallback);
	function successCallback(responseText) {
		p.innerHTML = responseText;
	}
	function errorCallback(status) {
		p.innerHTML = status;
	}
}