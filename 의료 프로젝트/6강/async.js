function task1(callback) {
    console.log('Task1 시작');
    setTimeout(function(){
        console.log('Task1 끝');
        callback(null, 'Task1 결과'); // callback('Error', null); 
    }, 300);
}

function task2(callback) {
    console.log('Task2 시작');
    setTimeout(function(){
        console.log('Task2 끝');
        callback(null, 'Task2 결과');
    }, 200);
}

var async = require('async');
async.series([task1, task2], function(err,results) { // 에러, 결과 / 배열형태
    if(err) {
        console.error('Error : ', err);
        return;
    }
    console.log('비동기 동작 모두 종료', results);
});
/* 실행결과
Task1 시작
Task1 끝
Taks2 시작
Task2 끝
비동기 동작 모두 종료 ['Task1 결과', 'Task2 결과' ]
*/