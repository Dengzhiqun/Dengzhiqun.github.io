function shuffling() {
	var shuffl = document.getElementById('shuffl');
	var rolling = document.getElementById('roll');
	var imgs = rolling.getElementsByTagName('img');
	var btnA = document.getElementById('btnA');
	var btnB = document.getElementById('btnB');
	var btns = document.getElementsByClassName('btn');
	var index = 0;
	var imgWidth = imgs[0].width;
	//定时器
	function rollAuto() {
		timer = setInterval(function () {
			Corresponding(index);
			step(index++);
			if (index >= imgs.length) {
				index = 0;
			}							
		},2000)
	}
	//清除定时器
	function clear() {
		clearInterval(timer);
		timer = null;
	}
	//对应按钮亮起
	function Corresponding(index) {
		for (var i = 0; i < btns.length; i++) {
			btns[i].id = "";	
		}
		if (index==4) {
			btns[0].id = "active";
		}
	 	btns[index].id = "active";
	}
	//下部按钮点击事件
	for (var i = 0; i < btns.length; i++) {
		btns[i].onclick = (function (index) {
			return function () {
				step(index);
				Corresponding(index);
			}
		}(i))
	}
	//平移
	function step(index) {
		if (index==0) {
			rolling.className = '';
			rolling.style.left = index * -imgWidth;
		}else{
			rolling.className = 'animal';
			rolling.style.left = index * -imgWidth + 'px';
		}
	}
	//左右点击事件
	btnA.onclick = function () {
		index++;
		if (index >= imgs.length) {
			index = 0;
			rolling.className = '';
			rolling.style.left = index * -imgWidth + 'px';
		}else{
			rolling.className = 'animal';
			rolling.style.left = index * -imgWidth + 'px';
		}
		Corresponding(index);
	}
	btnB.onclick = function () {
		index--;
		if (index < 0) {
			index = imgs.length - 1;
			rolling.className = '';
			rolling.style.left = index * -imgWidth + 'px';
		}else{
			rolling.className = 'animal';
			rolling.style.left = index * -imgWidth + 'px';
		}
		Corresponding(index);
	}
	//移入移出事件
	shuffl.onmouseover = function () {
		clear();
		btnA.style.display = 'block';
		btnB.style.display = 'block';
	}
	shuffl.onmouseout = function () {
		rollAuto(); 
		btnA.style.display = 'none';
		btnB.style.display = 'none';
	}
	//初始化
	function init() {
		rollAuto();
	}
	init();
}
shuffling()

var btn = document.getElementById('btn');
var list = document.getElementById('list')
btn.onclick = function () {
	list.style.display == 'block' ? list.style.display = 'none' : list.style.display = 'block';
}
window.onresize = function () {
	if (window.innerWidth >= 950) {
		list.style.display = 'none';
	}
}
