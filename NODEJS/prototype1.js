function Person(){
    Person.prototype.name="bitcode";
    Person.prototype.email="bitcode@bitcode.in"
    Person.prototype.tel=676754343;
    Person.prototype.friends=["sona","mina"]
    Person.prototype.sayHello=function(){
        
    }
    Person.prototype={
        sayHello:function(){
            return "Hello " + this.name;
        }
    }
}
var p1=new Person("bit","bitcode.in",76543333);
var p2=new Person("sayli","saylicode.in",65443333);
p1.friends.push("Sana")
console.log(P1.friends);
console.log(p2.friends);
console.log(p1.friends===p2.friends);
console.log(p1.sayHello===p2.sayHello);