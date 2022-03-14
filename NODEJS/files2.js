var buf = Buffer.alloc(80);
buf.write("This is additional data");
var base64String = buf.toString('base64');
console.log(base64String);
console.log(buf)