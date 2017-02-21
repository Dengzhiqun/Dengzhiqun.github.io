<?php 
	
	header("Content-Type:text/html;charset=utf8");
	
	// 到code值
	$code = $_GET["code"];

	// 第二步：通过code换取网页授权access_token和openid
	$response = httpGet("https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxa7e4ad7b31a9d61e&secret=308c5d4837e852fe955030b86be7a7a1&code={$code}&grant_type=authorization_code");
	// json转对象
	$responseObj = json_decode($response);
	// 拿到accessToken
	$access_token = $responseObj->access_token;
	// 拿到openId
	$openid = $responseObj->openid;
	//拿到用户信息
	$url1 = "https://api.weixin.qq.com/sns/userinfo?access_token={$access_token}&openid={$openid}&lang=zh_CN";
	$result = httpGet($url1);
	echo $result;
	$src = json_decode($result)->headimgurl;
	echo "<img src='{$src}'>";
	

	




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