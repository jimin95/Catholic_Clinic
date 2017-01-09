
/* 이미지 파일 올리기
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    fs.access('./kakao6.jpg', function(err){
        if(err){    
            res.statusCode = 404;
            res.end();
            return;

        }
        fs.readFile('./kakao6.jpg', function(err,data){
            res.end(data);
        });
    });
}).listen(3000);
*/

//mp3 파일
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    fs.access('./KissTheRain.mp3', function(err){
        if(err){    
            res.statusCode = 404;
            res.end();
            return;

        }
        fs.readFile('./KissTheRain.mp3', function(err,data){
            res.writeHead(200, {'Content-Type' : 'audio/mp3'});
            res.end(data);
        });
    });
}).listen(3000);
