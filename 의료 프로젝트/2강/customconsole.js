
var fs = require('fs');
var output = fs.createWriteStream('stdout.log'); // stdout.log라는 이름으로 파일 생성
var errorOutput = fs.createWriteStream('error.log');// error.log라는 이름으로 파일 생성

var Console = require('console').Console; // 콘솔 타입 로딩
var logger = new Console(output, errorOutput); // 객체 생성, 출력 스트림 2개

logger.info('info message');
logger.log('log message');

logger.warn('warning');
logger.error('error message');
/* 출력 스트림을 하나만 입력하면 info, log, warn, error 함수 모두 동일한 출력 스트림으로 값을 출력
   2개의 출력 스트림을 입력하면 두 번째 출력 스트림은 warn, error에서 동작함
   즉 info,log와 warn,error를 서로 다르게 동작하게 할 수 있다.*/