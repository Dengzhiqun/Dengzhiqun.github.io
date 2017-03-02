<?php 
	//XML格式设置
	header("Content-Type:text/xml");
	echo "<?xml version='1.0' encoding='UTF-8'?>";
	echo "<response>";
		//接受前台请求的数据
		$food = $_GET["food"];
		$foodArray = array("tuna","bacon","宫保鸡丁","酱板鸭");
		//匹配前后台数据
		if (in_array($food,$foodArray)) {
			echo "We do have ".$food;
		}else if($food == ""){
			echo "大哥，输入你要吃的菜";
		}else{
			echo "We do don't have the ".$food;
		}
	echo "</response>";
	
 ?>