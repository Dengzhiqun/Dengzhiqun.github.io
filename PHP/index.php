<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		tr,td{
			border: 1px solid #636462;
		}
	</style>
</head>
<body>
	<table>
		<?php 
			//变量
			$something = false;
			//PHP语言是弱类型语言
			echo $something;
			//分支
			$firsst = 10;
			$second = 20;
			$third = 30;
			if ($third < $second) {
				echo "this is true"."<hr>";
			}else{
				echo "this is false"."<hr>";
			}
			$anything = 30 + 60;
			echo $anything;
			echo "<hr>";
			//switch
			$country = 'USA';
			switch ($country) {
				case 'USA':
					echo "U R IN USA~!"."<hr>";
					break;
				default:
					echo "U R IN JAPAN~!"."<hr>";
					break;
			}
			//while
			$num = 1;
			while ($num <= 100) {
				$num++;
				if ($num%7==0) {
					echo $num."<hr>";
				}
			}
			//for
			for ($i=0; $i < 10; $i++) { 
				echo $i;
			}
			for ($i=1; $i < 10; $i++) { 
				echo "<tr>";
				for ($j=1; $j <= $i; $j++) { 
					echo "<td>";
						echo "$j X $i =".$j * $i;
					echo "</td>";
				}
				echo "</tr>";
			}
			//数组
			$arr = array('Henry','Bucky');
			echo $arr[0]."<hr>";
			print_r($arr)."<hr>";//输出数组
			//关联数组
			$arr1 = array("name"=>"Henry","sex"=>"Male","age"=>28);
			// echo $arr1['age']."<hr>";
			//add
			$arr2[]=1;
			$arr2[]=2;
			$arr2[]=3;
			// $arr2["apple"]="iPhone";
			echo $arr2[2]."<hr>";
			//delete
			array_splice($arr2,0,1);
			//update
			array_splice($arr2,0,0,1);
			//check 便历数组
			for ($i=0; $i < count($arr2); $i++) { 
				echo $arr2[$i]."<hr>";
			};
			foreach ($arr1 as $key => $value) {
				echo $value."<hr>";
			};
			//快速获取区间值
			$arr3 = range(10,20,2);
			print_r($arr3)."<hr>";
			//数组方法
			$arr4 = array(5,1,6,8,7);
			sort($arr4);
			print_r($arr4)."<hr>";
			rsort($arr4);
			print_r($arr4)."<hr>";
			//字符串
			$str = "2434jgh154";
			//获取长度
			// $length = strlen($str);
			// if ($length<9) {
			// 	echo "太短了";
			// };
			//改变字符串大小写
			// $upper = strtoupper($str);
			// echo $upper."<hr>";
			//查找
			//stripos忽略大小写
			// echo strpos($str,"4")."<hr>";
			//替换
			// echo str_replace("3", "@", $str)."<hr>"; 
			//切割
			// echo strstr($str,"4");
			//截取
			// echo substr($str,"3");
			echo ltrim($str,"234")."<hr>";
			//function
			/*
				1.php中的函数名不区分大小写
				2.php中的函数不能访问外部变量
				3.php中的函数可以传引用
			*/
			function noreturnAndAgmts(){
				echo "no return And agmts"."<hr>";
			}
			noreturnAndAgmts();
			function noReturnButAgmts($name){
				echo "I Love $name"."<hr>";
			}
			noReturnButAgmts('Henry');
			function noAgmtsButReturn(){
				return 12000;
			}
			echo noAgmtsButReturn()."<hr>";
			function withReturnAndAgmts($name,$age){
				echo "$name,$age"."<hr>";
			}
			withReturnAndAgmts("Henry",28);
			function defaultValue($name='Henry'){//函数形参可给默认值
				echo $name."<hr>";
			}
			defaultValue("Bucky");
			// 2.php中的函数不能访问外部变量--使用全局变量
			$a = 0;
			function worthless(){
				global $a;
				$a = 100;
				echo $a."<hr>";
				//PHP全局对象
				// var_dump($GLOBALS)."<hr>";
			}
			worthless();
			echo $a."<hr>";
			//传引用(地址)
			$b = 10;
			function modifyValue(&$val){
				$val = 100; 
				echo $val."<hr>";
			};
			modifyValue($b);
			echo $b."<hr>";
			//作用域和生命周期
			$a = 100;
			function scopeFunc (){
				global $a;
				echo $a++."<hr>";
			};
			scopeFunc();
			scopeFunc();
			scopeFunc();
			// echo $a;
			//静态变量
			function staticFunc(){
				static $a = 100;
				echo $a++."<hr>";
			};
			// for ($i=0; $i < 4; $i++) { 
			// 	staticFunc();
			// };
			//面向对象/类和对象
			class ClassName {
				//属性
				public $name;
				public $sex;
				public $age;
				//方法
				function setAge($age){
					if ($age < 0 || $age > 150) {
						$this->age = 18;
					}else{
						$this->age = $age;
					}	
				}
				//构造函数
				function __construct($_name,$_sex,$_age){
					$this->name = $_name;
					$this->age = $_age;
					$this->sex = $_sex;
				}
				function description(){
					return "姓名:{$this->name}";//类等于拼接
				}
				//析构函数最后执行
				function __destruct(){

				}
			};
			$c = new ClassName("Henry","male",18);
			echo $c->name."<hr>";
			$c->sex = 'Male';
			$c->age = 18;
			echo $c->age."<hr>";
			$c->setAge(50);
			echo $c->age."<hr>";
			/**
			* 继承
			*/
			// class AnotherClass extends ClassName
			// {
			// public $course
			// 	function __construct($_name,$_sex,$_age,$_course)
			// 	{
			// 		parent::__construct($_name,$_sex,$_age);//继承父类
			// 		$this->course = $_course;//子类方法
			// 	}
			// 	//重写父类方法
			// 	function description(){
			// 		return parent::description()."学科:{$this->course}"
			// 	}
			// }
			//修饰
			// public  //公开的
			// protected //受保护的
			// private  //私有的
		?>
	</table>
</body>
</html>