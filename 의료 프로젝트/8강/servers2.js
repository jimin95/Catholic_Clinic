var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res){
    var parsed = url.parse(req.url, true);//url을 parse해서
    var query = parsed.query;

    var start = parseInt(query.start); // int형으로 변환
    var end = parseInt(query.end);

    if( !start || !end) { // start와 end가 없으면 에러
        res.statusCode = 404;
        res.end('Wrong Parameter');
    }
    else {
        //합계 구하기
        var result = 0;
        for(var i=start; i<end; i++) {
            result += i;
        }
        res.statusCode = 200;
        res.end('Result : '+ result);
    }
}).listen(3000);

/* 실행결과
Result : 45

http://127.0.0.1:3000/count?start=1&end=10
주소 뒤에 count?start=1&end=10 입력하면 결과 출력됨
*/