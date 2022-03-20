var express = require("express");
var app = express();

app.get("/" , function(req,res){
    res.send("Hello");
    res.end();
})


app.get("/emp" , function(req,res){
    res.send("Helloemp");
    res.end();
})


app.post("/emp" , function(req,res){
    res.send("Hello post data");
    res.end();
})

app.put("/emp" , function(req,res){
    res.send("Hello put data");
    res.end();
})

app.delete("/emp" , function(req,res){
    res.send("Hello delete data");
    res.end();
})


app.listen(5000,function(){
    console.log("This is running port 5000")
})

