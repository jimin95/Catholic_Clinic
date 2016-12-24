
/*var http = require('http');// http 모듈 로딩
var server = http.createServer(); // 서버 생성

server.on('request', function(req,res){
    res.write('서버 테스트');
    res.end();
});
server.listen(3000);*/


//위 코드와 동일(방식만 다름)
var http = require('http');// http 모듈 로딩
var server = http.createServer( function(req,res){ // createServer안에 request에 대한 내용 작성
    res.write('서버 테스트');
    res.end();
}); 

server.listen(3000);