// var a:any=true;
// console.log(a);

// tuple
var arr:[string , number];
arr =["Sachin" , 30];
console.log(arr);


//union
var a:number | boolean;
a=true;
console.log(a);

a = true;
console.log(a);

var myarray:number[]=[1,2,3];
myarray=[1,2,3];
console.log(myarray);
myarray.push(5,6);
console.log(myarray);


// Arrow function
// var add =(x:number , y:number)=>{console.log(x+y);};
// add(5,10);

var add=()=>{
    var x=6;
    var y=9;
    var c=x+y;
    console.log(c);
}
add();
