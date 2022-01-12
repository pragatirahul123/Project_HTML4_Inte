var arr = [1,2,3,4,5];
var empty=[]
var i =0;
var sum =0;
while (i<arr.length-1){ 
    sum=arr[i]+arr[i+1]
    empty.push(sum)
    console.log(empty);
    i++;
    // console.log(empty);
}
