/*
*Your name: Deng
*Date     : 2016.12.05
*version  : 1.0
*/


function mouseWheel(obj,fn) {
	//判断是否是火狐浏览器
	var ff = navigator.userAgent.indexOf('Firefox');
	if (ff != -1) {
		obj.addEventListener('DOMMouseScroll',wheel,false);
	}else{
		obj.onmousewheel = wheel;
	}
	//实现具体事件方法
	function wheel(event) {
		var event = event || window.event;
		var down = true;
		//取消默认事件
		if (event.preventDefault) {
			event.preventDefault();
		}
		if (event.detail) {
			down = event.detail > 0;
		}else{
			down = event.wheelDelta > 0;
		}
		fn.apply(obj,[event,down]);
		return false;//阻止默认事件
	}
}