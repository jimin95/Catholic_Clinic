var fs = require('fs'); // 파일 시스템 모듈 로딩
var os = fs.createWriteStream('./output2.txt'); // output.txt 파일에 내용을 씀

os.on('finish', function(){
    console.log('finish');
});


/*
os.write('1234'); // '' 써줘야 됨
os.write('5678');
os.end('9'); // 여기까지가 End --> finish 이벤트로 진행됨
*/

//input 스트림, pipe 이용
var is = process.stdin; // 키보드로 입력한 거
is.pipe(os); // 파이프로 연결해서 위에 output2.txt 파일에 써짐