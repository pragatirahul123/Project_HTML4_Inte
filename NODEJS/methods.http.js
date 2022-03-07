var http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    // res.write("<h1>Hello Mona!!!!</h1>");
    if(req.method==="GET" && req.url==="/node"){
        res.write("<h1>this is Get for node URL</h1>");
    }
    if(req.method=="GET" && req.url==="/angular"){
        res.write("<h1>This is get of angular</h1>")
    }
    res.end();

}).listen(4000);
console.log("server is runnning on 4000");