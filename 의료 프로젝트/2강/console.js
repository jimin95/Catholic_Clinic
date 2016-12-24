
/*
var intVal = 3;
var obj = {
    name : 'NodeJS',
    how : 'Interesting'
};

console.log('hahaha');
console.log('intVal : ' + intVal);
console.log('obj : ' + obj);
console.log('obj : ', obj); // 콤마로 하면 객체 안의 값이 나옴
*/


console.time('TIMER'); // 시작시간 측정

var sum = 0;
for(var i = 1; i < 10000; i++) {
    sum += i;
}
console.log('sum = ', sum);

console.timeEnd('TIMER'); // 종료시간 측정