var querystring = require('querystring');

var str = 'group=EXID&name=하니&since='; // 쿼리스트링 사용해서 url 전부 없어도 분리 가능
var parsed = querystring.parse(str);
//console.log(parsed);

console.log('group : ', parsed.group); // group 부분 정보
console.log('name : ', parsed.name);
console.log('since : ', parsed.since); // since는 널값이라 출력은 빈칸 출력
console.log('friend : ', parsed.friend); // friend는 없는 값이라 undefined