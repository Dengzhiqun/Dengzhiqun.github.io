function setCookie(key,value,day) {
	var date = new Date();
	var nowDate = date.getDate();
	date.setDate(nowDate + day);
	document.cookie = key + "=" + value + ";expires" + date;
}
function getCookie(key) {
	var arr = document.cookie.split("; ");
	for (var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split("=");
		if (arr2[0] == key) {
			return arr2[1];
		}
	}
}
function removeCookie(key) {
	setCookie(key,"",-1);
}