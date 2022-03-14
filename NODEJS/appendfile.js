const fs = require("fs");
const content = "This is my file content";
fs.appendFile("test.txt" ,content,(err)=>{
    if(err){
        console.log(err);
        return;
    }
})