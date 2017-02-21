<?php 
	//前后台交互
	// $username = $_REQUEST["username"];
	// $password = $_REQUEST["password"];
	// if ($username=="fuli"&&$password=="123") {
	// 	$array = array("error"=>0,"msg"=>"success");
	// 	$jsonStr = json_encode($array);
	// 	echo $jsonStr;
	// 	echo "<script>window.localtion.href = 'http://www.baidu.com'</script>";
	// }else{
	// 	$array = array("error"=>0,"msg"=>"something error");
	// 	$jsonStr = json_encode($array);
	// 	echo $jsonStr;
	// 	echo "<script>window.location.href = 'https://www.baidu.com/index.php?tn=monline_3_dg'</script>";
	// };
	//文件上传
	// var_dump($GLOBALS);
	// var_dump($_FILES);
	//name type tmp_name error size
	$tupian = $_FILES["tupian"];
	$yinpin = $_FILES["yinpin"];
	$shipin = $_FILES["shipin"];
	$yasuo = $_FILES["yasuo"];
	// print_r($tupian);
	// print_r($yinpin);
	// print_r($shipin);
	// print_r($yasuo);
	/*error
	0:上传成功
	1:文件太大
	2:POST容量超出
	3：断网
	4：未上传文件
	*/
	move_uploaded_file($tupian["tmp_name"],"4.png");
	move_uploaded_file($yinpin["tmp_name"],"5.mp3");
	move_uploaded_file($shipin["tmp_name"],"5.mp4");
	move_uploaded_file($yasuo["tmp_name"],"5.zip");
 ?>