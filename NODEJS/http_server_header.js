var http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("<h1>Hello Mona!!!!</h1>");
    res.end();

}).listen(4000);
console.log("server is runnning on 4000");