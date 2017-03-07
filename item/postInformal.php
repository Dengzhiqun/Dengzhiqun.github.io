<?php
	$names =$_POST["names"];
	$textes =$_POST["textes"];
	$phones =$_POST["phones"];
	function inserInto($sql){
		$mysqli = new mysqli("bdm260329367.my3w.com:3306","bdm260329367","m8202329","bdm260329367_db");
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		};
		$mysqli->query("set names utf8");
		$result = $mysqli->query($sql);
		if ($result == 1) {
			echo "success";
		}
		$mysqli->close();
	}
	$sql = "INSERT INTO userr(user,contact,content) values('{$names}','{$phones}','{$textes}')";
	inserInto($sql);
 ?>