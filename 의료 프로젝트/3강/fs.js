var fs = require('fs');

/* 비동기식
fs.readFile('./helloWrold.txt', 'utf-8', function(err, data){ // 비동기식으로 읽음
    if(err) { // 에러일 경우 아래 내용 실행
        console.error('File Read Error : ', err);
        return;
    }
    console.log('File : ', data);
});
*/

/*
try{ // 동기식은 try ~ catch로 예외처리
    var data = fs.readFileSync('./helloWorld.txt', 'utf-8'); // 동기식은 콜백함수 없음
    console.log(data);

}catch(error) {
    console.error('Error : ', error);
}
*/