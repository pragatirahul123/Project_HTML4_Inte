class Person2{
    firstName:string;
    lastName:string;

    getFullName(){
        return this.firstName+this.lastName;
    }
}

var aPerson = new Person2();
aPerson.firstName ="Hello";
aPerson.lastName ="World";

console.log(aPerson.getFullName());


export class Person{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName=lastName;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}
var aPerson = new Person("sachin" ,"tendulkar");
console.log(aPerson.getFullName());