var url = require('url');

var urlStr = 'http://idols.com/hot/q?group=EXID&name=하니&since=';
var parsed = url.parse(urlStr, true); // 두 번째를 true로 하면 url이 group 부터 분석됨
//console.log(parsed);

console.log('protocol : ', parsed.protocol);
console.log('host : ', parsed.host);
console.log('query : ', parsed.query);