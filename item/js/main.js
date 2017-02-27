var bool = true;
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
	location.reload()
})