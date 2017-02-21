
//全局对象
// console.log("Hello Word~!");
// setTimeout(function () {
//     console.log("3s已过");
// },3000);
// var times = 0;
// var timer = setInterval(function () {
//     times += 2;
//     console.log(times + "秒已经过去了");
//     if (times > 5){
//         clearInterval(timer);
//     }
// },2000);
// console.log(__dirname);//文件路径但不包含文件名
// console.log(__filename);//文件路径,包含文件名


// //正常函数
// function sayhi() {
//     console.log("hi");
// };
// //函数表达式
// var sayBy = function () {
//     console.log('bye');
// };
// function callFunction(func) {
//     func();
// };
// // callFunction(sayBy);




//module 模块 require（）引入模块
//模块：每个js文件都是一个模块（包括系统提供的和自定义的）；

// var sthing = require('./stuff');
// console.log(sthing.adder(1,2));
// console.log(sthing.counter([1,1,1]));
// console.log(sthing.pi);



// //读写文件
// var fs = require('fs');
// //read a file
// var readMe = fs.readFileSync('readMe.txt','utf8');//路径  编码
// console.log(readMe);
// //write a file
// fs.writeFileSync('writeMe.txt',readMe);//直接创建文件
// //read a file with aSync异步
// fs.readFile('readMe.txt','utf8',function (err,date) {
//     if (err){
//         throw err;
//     }else {
//         console.log(date);
//     }
// });
// console.log('异步先执行');
// //write a file with aSync异步
// fs.readFile('readMe.txt','utf8',function (err,date) {
//     if (err){
//         throw err;
//     }else {
//         fs.writeFile('writeMe.txt',date);
//     }
// });



//创建和删除目录
// var fs = require('fs');
// fs.unlink('writeMe.txt',function () {
//     console.log('文件已删除');
// });
//make a file
//如果文件夹已存在  不能再次创建  否则报错
// fs.mkdir('stuff');
//remove a file
// fs.rmdir('stuff');
//如果文件夹中有内容 不能直接删除


//读取文件流
// var fs = require('fs');
// //创建读取文件流的对象
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
// //创建写文件流的对象
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
// myReadStream.on('data',function (chunk) {
//     console.log("正在接收每块数据AAA");
//     console.log(chunk);
//     //写文件流
//     myWriteStream.write(chunk);
// });
//pipe


//创建服务器
//Buffer (缓存区)  Stream（流）
//缓存区：Buffer就好比一个容器，用于接收服务器返回的每一块数据
//流：抽象的接口，将数据分段进行输出

//引入http模块
// var http = require('http');
// //路由：根据指定的路径，去访问页面
//
// // 创建一个服务
// var server = http.createServer(function (req,res) {
//     console.log('客户端向服务器发送请求：' + req.url);
//     //设置响应头
//     // res.writeHead(200,{'Content-Type':'application/json'});
//     //设置响应结束后的内容
//     // res.end('hello node.js');
//
//     // var myReadStream = fs.createReadStream(__dirname + '/index.html');
//     // myReadStream.pipe(res);
//
//     //准备一个对象
//     // var myObj={
//     //     name:'Henry',
//     //     age:28,
//     //     job:'Progrem Monkey'
//     // };
//     // res.end(JSON.stringify(myObj));
//     //判断路径
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         var myReadStream = fs.createReadStream(__dirname + '/index.html');
//         myReadStream.pipe(res);
//     }
// });
// //监听server
// server.listen(3000,'127.0.0.1');
// console.log('server is running');


//引入express模块
var express = require("express");
var app = express();
app.use('/assets',express.static('assets'));//访问css外部样式表
app.set('view engine','ejs');
app.get('/',function (req,res) {
     res.render('index');
});
app.get('/contact',function (req,res) {
    res.render('contact');
});
//模板引擎
app.get('/profile/:id',function (req,res) {
    var data = [{age:28,job:'progrem monkey'},{age:18,job:'nurse'}];
    res.render('profiles',{person:req.params.id,data:data});
    // res.send(req.params.id);
});
app.listen(3000);