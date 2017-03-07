<?php
	function selectInfo(){
		$mysqli = new mysqli("bdm260329367.my3w.com:3306","bdm260329367","m8202329","bdm260329367_db");
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		};
		$mysqli->query("set names utf8");
		$result = $mysqli->query("SELECT * FROM personal_information");
		if ($result->num_rows) {
			$row = $result->fetch_all(MYSQLI_ASSOC);
			echo json_encode($row);
		}
		$mysqli->close();
	}
	selectInfo();
 ?>