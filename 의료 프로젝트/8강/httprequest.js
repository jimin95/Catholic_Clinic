var http = require('http');
var server = http.createServer(function(req,res){

    console.log('Method : ', req.method);//req의 method정보 출력
    console.log('url : ', req.url);
    console.log('headers : ', req.headers['user-agent']);// 헤더중에 user-agent 정보만 출력

    res.write('Hello Server');
    res.end();

}).listen(3000);