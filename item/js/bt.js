var index = 0;
var bool = true;
function banner() {
	var timer;
	$('.banner_list li').width($(window).width());
	$('.banner_list').width($('.banner_list li').outerWidth(true)*$('.banner_list li').length);
	function time() {
		timer = setInterval(function () {
			index++;
			left();
		},3000);
	}
	$('.banner_list').on("mouseover",function () {
		cm();
	}).on("mouseout",function () {
		time();
	})
	function left() {
		var bw = $(window).width();
		if (index > $('.banner_list li').length - 1) {
			index = 0;
		}else if (index < 0) {
			index = $('.banner_list li').length - 1;
		}
		$('.banner_list').animate({left: -index * bw})
		rm();
	}
	function cm() {
		clearInterval(timer);
		timer = null;
	}
	function rm() {
		for (var i = 0; i < $('.banner .banner_nav li').length; i++) {
			$('.banner .banner_nav li')[i].className = "";
		}
		$('.banner .banner_nav li')[index].className = "on";
	}
	$(".prev").on('click',function () {
		cm();
		index--;
		left();
	})
	$(".next").on('click',function () {
		cm();
		index++;
		left();
	})
	$('.banner .banner_nav li').on('click',function () {
		cm();
		index = this.getAttribute("i") - 1;
		left();
	});
	cm();
	time();
}

$(".cl .nav_dropdown").on("click",function (){
	if ($(window).width() > 960) {
		$(".nav_dropdown_list").slideUp(800);
		if (this.getAttribute("bol") == "true") {
			$(this).find(".nav_dropdown_list").slideDown(1000);
			for (var i = 0; i < this.parentNode.children.length; i++) {
				this.parentNode.children[i].setAttribute("bol","true")
			}
			this.setAttribute("bol","false");
		}else{
			$(this).find(".nav_dropdown_list").slideUp(300);
			this.setAttribute("bol","true");
		}
	}else{
		$(".nav_dropdown_list").hide(800);
		if (this.getAttribute("bol") == "true") {
			$(this).find(".nav_dropdown_list").show(1000);
			for (var i = 0; i < this.parentNode.children.length; i++) {
				this.parentNode.children[i].setAttribute("bol","true")
			}
			this.setAttribute("bol","false");
		}else{
			$(this).find(".nav_dropdown_list").hide(300);
			this.setAttribute("bol","true");
		}
	}	
})
$("#button").on('click',function () {
	if (bool) {
		$('.nav').show(1000);
		bool = false;
	}else{
		$('.nav').hide(800);
		bool = true;
	}	
})
$(window).resize(function () {
	window.location.reload();
	window.location.href="index.html";
})
banner();