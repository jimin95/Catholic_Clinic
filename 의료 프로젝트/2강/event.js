process.on('exit', function(code) {
    console.log('exit event : ', code); // 0은 정상종료 코드
})

process.once('exit', function(code){ // 한번만 실행
    console.log('exit event with once', code);
});

process.emit('exit'); // 이벤트 발생
process.emit('exit', 0);
process.emit('exit', 1);

/* 출력결과
exit event : undefined // 파라미터 없는 경우
exit event with once undefined // 한번만 실행
exit event : 0
exit event : 1
exit event : 0 // 이 부분 왜 또나옴???
*/