const fs=require('fs');
try{
    const data = fs.readFileSync("text.txt" ,"utf-8");
    console.log(data);
}
catch(err){
    console.log(err);
}
console.log("This is after file reading");