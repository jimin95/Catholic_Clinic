function task1(callback) {
    console.log('Task1 시작');
    setTimeout(function(){
        console.log('Task1 끝');
        callback();
    }, 300);
}

function task2(callback) {
    console.log('Task2 시작');
    setTimeout(function(){
        console.log('Task2 끝');
        callback();
    }, 200);
}

task1(function() { // task1 함수 안에 task2 함수 실행
    task2(function() { // 콜백 안에 콜백 호출 --> 콜백헬 

    });
});

/* 실행 결과
Task1 시작
Task1 끝
Task2 시작
Task2 끝 
*/