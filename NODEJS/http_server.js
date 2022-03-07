var http = require("http");
http.createServer((req,res)=>{
    res.write("Hello Mona!!!!");
    res.end();

}).listen(4000);
console.log("server is runnning on 4000");