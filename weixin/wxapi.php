<?php 
	// 主动向微信服务器发送请求
	
	// 引入Storage存储库
	use sinacloud\sae\Storage as Storage;

	// 封装微信接口请求时需要用到的方法及属性
	class Weixin{
		// 属性
		private $appID = "wxa7e4ad7b31a9d61e";
		private $appSecret = "308c5d4837e852fe955030b86be7a7a1";

		// 方法
		// 请求access_token 
		function getAccessToken(){
			// 创建Storage对象
			$s = new Storage();
			$Bucket = $s->getBucket("weixin");

			if ($Bucket == false) {
				$s->putBucket("weixin");
				$access_token = $this->getNewAccessToken();
				return $access_token;
			}else{
				$response = $s->getObject("weixin", "access_token.txt");
				$responseJson = $response->body;
				$responseObj = json_decode($responseJson);

				// 拿到过期时间
				$expires_time = $responseObj->expires_time;
				// 拿到当前时间
				$currentTime = time();

				if ($currentTime < $expires_time) {
					// 没过期
					$access_token = $responseObj->access_token;
					return $access_token;
				}else{
					// 过期了,重新获取
					return $this->getNewAccessToken();
				}
			}
		}

		function getNewAccessToken(){
			$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$this->appID}&secret={$this->appSecret}";
			$json = $this->httpGet($url);
			// 将json转化成对象
			$obj = json_decode($json);

			// 拿到access_token
			$access_token = $obj->access_token;
			// 拿到过期时间
			$expires_in = $obj->expires_in;
			// 真正的过期时间
			$expires_time = time() + $expires_in - 200;

			$saveArr = array("access_token"=>$access_token,"expires_time"=>$expires_time);

			$saveJson = json_encode($saveArr);

			// 创建Storage对象
			$s = new Storage();

			// 调用存储方法
			$s->putObject($saveJson, "weixin", "access_token.txt", array(), array('Content-Type' => 'text/plain;charset=utf8'));

			return $access_token;
		}

		/*
			1.首先获取一个access_token,然后存储到sae中的storage里

			2.判断token是否过期,time() + 过期时间 - 200;
		 */

		// 创建自定义菜单
		function createMenu(){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token={$access_token}";
			$data = '{
			     "button":[
			     	{	
			          "name":"点击事件",
			          "sub_button":[
			          {
						"name":"发送文字",
						"type":"click",
						"key":"sendText",
						"sub_button":[]
			          },
			          {
						"name":"发送图片",
						"type":"click",
						"key":"sendImage",
						"sub_button":[]
			          },
			          {
						"name":"发送语音",
						"type":"click",
						"key":"sendVoice",
						"sub_button":[]
			          },
			          {
			          	"name":"发送视频",
						"type":"click",
						"key":"sendVideo",
						"sub_button":[]
			          }
			          ]
			      	},
			      	{
			           "name":"相册扫码",
			           "sub_button":[
			           {	
			               "type":"pic_sysphoto",
			               "name":"相机",
			               "key":"camera",
			               "sub_button":[]
			            },
			            {
			               "type":"pic_weixin",
			               "name":"相册",
			               "key":"album",
			               "sub_button":[]
			            },
			            {
			               "type":"pic_photo_or_album",
			               "name":"相机或相册",
			               "key":"photoOrAlbum",
			               "sub_button":[]
			            },{	
			               "type":"scancode_waitmsg",
			               "name":"扫码带提示",
			               "key":"scancodeText",
			               "sub_button":[]
			            },
			            {
			               "type":"scancode_push",
			               "name":"扫一扫",
			               "key":"scancode",
			               "sub_button":[]
			            }]
			       	},
			       	{
			       		"name":"其他事件",
			          "sub_button":[
			          {
						"name":"课后帮",
						"type":"view",
						"url":"http://www.thenewstep.com",
						"sub_button":[]
			          },
			          {
						"name":"发送位置",
						"type":"location_select",
						"key":"sendLocation",
						"sub_button":[]
			          }]
			       	}
			       ]}';	
			return $this->httpPost($url,$data);}

		// 删除自定义菜单
		function deleteMenu(){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/menu/delete?access_token={$access_token}";
			return $this->httpGet($url);}

		// 上传流媒体文件
		function updateFile($type,$filename){
			$access_token = $this->getAccessToken();
			$url = "https://api.weixin.qq.com/cgi-bin/media/upload?access_token={$access_token}&type={$type}";
			$postBody = array("media"=>"@".realpath($filename));
			return $this->httpPost($url,$postBody);
		}

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
	}

	$wx = new Weixin();
	// 获取一个access_token
	echo $wx->getAccessToken();
	// echo $wx->createMenu();
	// echo $wx->deleteMenu();
	// echo $wx->updateFile("image","1.png");
	
 ?>