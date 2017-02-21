<?php 
	function updateScore($openid,$score){
		$mysqli = new mysqli(SAE_MYSQL_HOST_M,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB,SAE_MYSQL_PORT);
		if ($mysqli->connect_errno) 
			die($mysqli->connect_error);
		$mysqli->query("set names utf8");
		$url = "UPDATE userinfo SET score = $score WHERE openid = '$openid";
		$mysqli->query($url);
		$mysqli->close();
	}
	$openid = $_GET['openid'];
	$score = $_GET["score"];
	
	function getScore($openid){
		$mysqli = new mysqli(SAE_MYSQL_HOST_M,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB,SAE_MYSQL_PORT);
		if ($mysqli->connect_errno) 
			die($mysqli->connect_error);
		$mysqli->query("set names utf8");
		$url = "SELECT * FROM userinfo WHERE openid='$openid";
		$result = $mysqli->query($url);
		$score = 0;
		if ($result) {
			$user = $result->fetch_array(MYSQLI_ASSOC);
			$score = $user["score"];
		}
		$mysqli->close();
		return $score;
	}
	$sqlScore = getScore($openid);
	if ($score > $sqlScore) {
		updateScore($openid,$score);
		echo $score;
	}else{
		echo $sqlScore;
	}
 ?>