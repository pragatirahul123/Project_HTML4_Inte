function createPerson(name,email,tel){
    var o=new Object();
    o.name = name;
    o.email=email;
    o.tel=tel;
    o.sayHello=function(){
        return "Hello " +o.name;
    }
    return o;

}
var p1=createPerson("bitcode","test@bitcode.in",988765433)
// var p2=createPerson("sagar","sagar@bitcode.in",876565433)
// console.log(p1.name===p2.name)

console.log(p1.sayHello())