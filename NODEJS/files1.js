//buffer class
var utf8String ='my string';
var buf = Buffer.from(utf8String);

var base64String = buf.toString('base64')
console.log(base64String);
console.log(buf);