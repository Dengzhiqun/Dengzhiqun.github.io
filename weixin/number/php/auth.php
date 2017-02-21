<?php 
	require("sql.php");
	// 让用户点击的url,目的是为了让用户点击授权按钮
//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa7e4ad7b31a9d61e&redirect_uri=http://dwitf.applinzi.com/number/php/auth.php&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect 
	header("Content-Type:text/html;charset=utf8");
	
	// 拿到code值
	$code = $_GET["code"];
	// 第二步：通过code换取网页授权access_token和openid
	$response = httpGet("https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxa7e4ad7b31a9d61e&secret=308c5d4837e852fe955030b86be7a7a1&code={$code}&grant_type=authorization_code");
	// json转对象
	$responseObj = json_decode($response);
	// 拿到accessToken
	$access_token = $responseObj->access_token;
	// 拿到openId
	$openid = $responseObj->openid;
	// echo $openid;
	session_start();
	$_SESSION["openid"] = $openid;
	// 第四步：拉取用户信息(需scope为 snsapi_userinfo)
	$url = "https://api.weixin.qq.com/sns/userinfo?access_token={$access_token}&openid={$openid}&lang=zh_CN";
	// 网络请求
	$response = httpGet($url);
	$userinfo = json_decode($response);
	if (isUserExist($openid) == false) {
		insertUserInfo($userinfo);
	};	
	echo "<script>window.location.href='../index.html'</script>";
	insertUserInfo($userinfo);
	// 网络请求
	function httpGet($url){
		$curl = curl_init();
		curl_setopt($curl,CURLOPT_URL,$url);
		curl_setopt($curl,CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($curl);
		curl_close($curl);
		return $result;}
	function httpPost($url,$data){
		$curl = curl_init();
		curl_setopt($curl,CURLOPT_POST,true);
		curl_setopt($curl,CURLOPT_URL,$url);
        curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
		curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
		$result = curl_exec($curl);
		curl_close($curl);
		return $result;}
 ?>