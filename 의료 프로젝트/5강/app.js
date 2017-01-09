var greeting = require('./greeting');
greeting.hello(); // greeting.js에 있는 hello 함수 호출해서 사용, 모듈 분리

var Exercise = require('./exercise');
var exercise = new Exercise();// 객체 생성후 사용
exercise.run(); // exercise에 있는 run 함수 실행

var obj = require('./moduleobject.js');
obj.study(); //  moduleobject.js에 있는 study 함수 실행 