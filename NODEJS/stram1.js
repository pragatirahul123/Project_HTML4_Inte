var fs = require('fs');
const { Stream } = require('stream');
var resdata='';

var readStream = fs.createReadStream("my-file.txt",'utf-8');
readStream.on('data',function(chunk){
    resdata+=chunk;
}).on('end',function(){
    console.log(resdata);

}).on('error',function(err){
    console.log(err.stack);

});





