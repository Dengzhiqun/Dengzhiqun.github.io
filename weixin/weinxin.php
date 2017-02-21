<?php 
	// weixin: 被动接收微信服务器发来的请求
	
	// 验证开发者
	function checkSignature(){
		$signature = $_GET["signature"];
		
		$timestamp = $_GET["timestamp"];
		$nonce = $_GET["nonce"];
		$token = "dengzhiqun";

		$echostr = $_GET["echostr"];

		$tmpArr = array($token,$timestamp,$nonce);
		// 排序
		sort($tmpArr,SORT_STRING);

		// 将数组转为字符串
		$str = implode($tmpArr);
		// 加密
		$sign = sha1($str);

		// 判断是否来源于微信
		if ($sign == $signature) {
			echo $echostr;
		}}
	// checkSignature();

	

	/*
		<xml>
		 <ToUserName><![CDATA[toUser]]></ToUserName>
		 <FromUserName><![CDATA[fromUser]]></FromUserName>
		 <CreateTime>1348831860</CreateTime>
		 <MsgType><![CDATA[text]]></MsgType>
		 <Content><![CDATA[this is a test]]></Content>
		 <MsgId>1234567890123456</MsgId>
		 </xml>
	 */
	// 拿到用户发来的原生数据
	// $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];

	$postStr = file_get_contents("php://input");
	if (!empty($postStr)) {
		$postObj = simplexml_load_string($postStr);

		$MsgType = $postObj->MsgType;

		switch ($MsgType) {
			case 'text':
				echo handleText($postObj);
				break;

			case 'image':
				echo handleImage($postObj);
				break;
			case 'voice':
				echo handelVoice($postObj);
				break;

			case 'event':
				echo handleEvent($postObj);
				break;
		}
	}

	// 处理事件
	function handleEvent($postObj){

		// 拿到Event对应的值
		$Event = $postObj->Event;
		$FromUserName = $postObj->FromUserName;
		$ToUserName = $postObj->ToUserName;
		$time = time();
		$MediaId = "htX8q9seVNknTlbUKc7r081ADjLuaQsGVJ5nIf_SB5FU_wjgaq8O9gFVtjPkAMXp";

		switch ($Event) {
			case 'CLICK':
				$EventKey = $postObj->EventKey;
				$sendText = "Welcome to BJH1013~!";
				// 判断EventKey的值是什么? 
				if ($EventKey == "sendText") {
					return <<<HHHHH
					<xml>
					 <ToUserName><![CDATA[{$FromUserName}]]></ToUserName>
					 <FromUserName><![CDATA[{$ToUserName}]]></FromUserName>
					 <CreateTime>{$time}</CreateTime>
					 <MsgType><![CDATA[text]]></MsgType>
					 <Content><![CDATA[{$sendText}]]></Content>
					 </xml>
HHHHH;
				}elseif ($EventKey == "sendImage") {
					
					return <<<HHHHH
					<xml>
					<ToUserName><![CDATA[{$FromUserName}]]></ToUserName>
					<FromUserName><![CDATA[{$ToUserName}]]></FromUserName>
					<CreateTime>{$time}</CreateTime>
					<MsgType><![CDATA[image]]></MsgType>
					<Image>
					<MediaId><![CDATA[{$MediaId}]]></MediaId>
					</Image>
					</xml>
HHHHH;
				}
				break;
		}
	}

	function handelVoice($postObj){
		// 公众号的ID
		$ToUserName = $postObj->ToUserName;
		$FromUserName = $postObj->FromUserName;
		$time = time();
		$MediaId = $postObj->MediaId;

		return <<<HHHHH
			<xml>
				<ToUserName><![CDATA[{$FromUserName}]]></ToUserName>
				<FromUserName><![CDATA[{$ToUserName}]]></FromUserName>
				<CreateTime>{$time}</CreateTime>
				<MsgType><![CDATA[voice]]></MsgType>
				<Voice>
				<MediaId><![CDATA[$MediaId]]></MediaId>
				</Voice>
			</xml>
HHHHH;
	}



	function handleImage($postObj){
		// 公众号的ID
		$ToUserName = $postObj->ToUserName;
		$FromUserName = $postObj->FromUserName;
		$time = time();
		$MediaId = $postObj->MediaId;

		return <<<HHHHH
			<xml>
			<ToUserName><![CDATA[{$FromUserName}]]></ToUserName>
			<FromUserName><![CDATA[{$ToUserName}]]></FromUserName>
			<CreateTime>{$time}</CreateTime>
			<MsgType><![CDATA[image]]></MsgType>
			<Image>
			<MediaId><![CDATA[{$MediaId}]]></MediaId>
			</Image>
			</xml>
HHHHH;
	}


	function handleText($postObj){
		// 公众号的ID
		$ToUserName = $postObj->ToUserName;
		$FromUserName = $postObj->FromUserName;
		$time = time();
		$Content = $postObj->Content;

		$replyMsg = "收到".$Content;

		return <<<HHHHH
			<xml>
			 <ToUserName><![CDATA[{$FromUserName}]]></ToUserName>
			 <FromUserName><![CDATA[{$ToUserName}]]></FromUserName>
			 <CreateTime>{$time}</CreateTime>
			 <MsgType><![CDATA[text]]></MsgType>
			 <Content><![CDATA[{$replyMsg}]]></Content>
			 </xml>
HHHHH;
	}


	
	
 ?>