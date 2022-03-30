var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Person2;
}());
var aPerson = new Person2();
aPerson.firstName = "Hello";
aPerson.lastName = "World";
console.log(aPerson.getFullName());
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var aPerson = new Person("Sachin", "Tendulkar");
console.log(aPerson.getFullName());
