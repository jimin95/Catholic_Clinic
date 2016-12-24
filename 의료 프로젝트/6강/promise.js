function task1(fullfill, reject) { // fullfill=정상적 콜백, reject=에러 콜백
    console.log('Task1 시작');
    setTimeout(function(){
        console.log('Task1 끝');
        fullfill('Task1 결과'); // 정상적인 경우로 가정
        //rejected('에러 메세지');
    }, 300);
}

function fullfilled(result) { // 정상적인 경우
    console.log('fullfiled : ', result);
}

function rejected(err) { // 에러인 경우
        console.log('rejected : ', err);
}
new Promise(task1).then(fullfilled,rejected); // then 이용해서 정상적이면 fullfiled로 가고
// 에러이면 rejected로 보냄 

/* 실행 결과
Task1 시작
Task1 끝
fullfiled : Task1 결과
*/