<?php 
header("Content-Type:text/xml");
echo "<?xml version='1.0' encoding='UTF-8'?>";
echo "<aa>";
	$name = $_GET["name"];
	$str = "SELECT * FROM user WHERE name = '{$name}'";
	$array = array();
	function selectInfo($str,&$array){
		$mysqli = new mysqli("localhost","root","","php1013");
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query("set names utf8");
		$result = $mysqli->query($str);
		if ($result->num_rows) {	
			$array = array();
			while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
				array_push($array,$row);
			}
		};
		$mysqli->close();
	};
	selectInfo($str,$array);
	if (count($array) != 0) {
		echo "<table border=1>";
			echo "<tr>";
				echo "<th>";
					echo "姓名";
				echo "</th>";
				echo "<th>";
					echo "性别";
				echo "</th>";
				echo "<th>";
					echo "年龄";
				echo "</th>";
				echo "<th>";
					echo "电话";
				echo "</th>";
			echo "</tr>";
			echo "<tr>";
				echo "<th>";
					echo $array[0]["name"];
				echo "</th>";
				echo "<th>";
					echo $array[0]["sex"];
				echo "</th>";
				echo "<th>";
					echo $array[0]["age"];
				echo "</th>";
				echo "<th>";
					echo $array[0]["tel"];
				echo "</th>";
			echo "</tr>";
		echo "</table>";
	}
echo "</aa>";
 ?>