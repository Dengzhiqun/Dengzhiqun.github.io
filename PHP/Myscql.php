<?php 

//php操作数据库
/*
1.连接数据库
2.执行sql语句
3.关闭数据库
*/
//链接数据库
// $mysqli = new mysqli("localhost","root","","php1013");
// //检查是否成功
// if ($mysqli->connect_errno) {//只要是0，数据库链接成功
// 	//如果错误值不是0，那么停止数据库操作，返回错误信息
// 	die("something went wrong..".$mysqli->connect_error);
// };
// //解决汉字乱码
// $mysqli->query("set names utf8");
// //执行sql语句
// // $result = $mysqli->query("INSERT INTO user(name,tel)VALUES('梦洁','13552233223')");
// $sql = "UPDATE user SET sex='女',age=20 WHERE name='梦洁'";
// $result = $mysqli->query($sql);
// if ($result) {
// 	echo "success";
// }else{
// 	echo "fails";
// };
// //关闭数据库
// $mysqli->close();
//封装
// function insertInfo($sql){
// 	$mysqli = new mysqli("localhost","root","","php1013");
// 	if ($mysqli->connect_errno) {
// 		die("something went wrong".$mysqli->connect_error);
// 	};
// 	$mysqli->query("set names utf8");
// 	$mysqli->query($sql);
// 	$mysqli->close();
// };
// $sql = "INSERT INTO user(name,sex,age,tel)VALUES('星星','Male',22,'15754715110')";
// insertInfo($sql);
// function UPDATE($sql){
// 	$mysqli = new mysqli("localhost","root","","php1013");
// 	if ($mysqli->connect_errno) {
// 		die($mysqli->connect_error);
// 	};
// 	$mysqli->query("set names utf8");
// 	$mysqli->query($sql);
// 	$mysqli->close();
// };
// $sql = "UPDATE user SET age=15 WHERE id=1";
// UPDATE($sql);
//查
// function selectInfo($sql){
// 	$mysqli = new mysqli("localhost","root","","php1013");
// 	if ($mysqli->connect_errno) {
// 		die($mysqli->connect_error);
// 	};
// 	$mysqli->query("set names utf8");
// 	$result = $mysqli->query($sql);
// 	// print_r($result);
// 	if ($result->num_rows) {
// 		//第一种方法
// 		// $row = $result->fetch_row();
// 		// while ($row = $result->fetch_row()) {
// 		// 	print_r($row);
// 		// };
// 		//第二种方法
// 		// $array = array();
// 		// while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
// 		// 	array_push($array,$row);
// 		// 	// print_r($row);
// 		// };
// 		// $jsonStr = json_encode($array);
// 		// echo $jsonStr;
// 		//第三种方法
// 		$row = $result->fetch_all(MYSQLI_ASSOC);
// 		// print_r($row);	
// 		echo json_encode($row);
// 	};
// 	$mysqli->close();
// };	
// $sql = "SELECT * FROM user";
// selectInfo($sql);



 ?>


