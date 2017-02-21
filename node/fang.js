var fs = requier("fs");
var http = requier("http");
var server = http.createServer(function (req,res) {
	if (req.url === "/") {
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream(__dirname + "/index.html").pipe(res);
	}else if (req.url === "/") {
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream(__dirname + "/index.html").pipe(res);
	}else if (req.url === "/") {
		res.writeHead(200,{"Content-Type":"application/json"});
		var data = {
			name:"henry",
			age:18
		};
		res.end(JSON.stringify(data));
	}
});
server.listen(80,"127.0.0.1");