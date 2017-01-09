var http = require('http');
var server = http.createServer(function(req,res){
    res.statusCode = 200; // 정상
    res.statusMessage = 'OkOK';
   // res.setHeader('Content-type', 'text/plain'); // 헤더 붙이면 res.write에 써있는 거 그대로 출력

    res.write('<html><body><h1>http response exercise</h1></body></html>');
    res.end();

}).listen(3000);