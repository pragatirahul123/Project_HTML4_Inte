function Person(){
    Person.prototype.name="bitcode";
    Person.prototype.email="bitcode@bitcode.in"
    Person.prototype.tel=676754343;
    Person.prototype.friends=["sona","mina"]
    Person.prototype.sayHello=function(){
        return "Hello" + this.name;
    }
}
var p1=new Person();
p1.name="new name";
p1.friends.push("Sana")
var p2=new Person();
console.log(p1.sayHello());
console.log(P2.friends);