import {person} from './class';
class Admin extends Person{

}
class Manager extends Person{

}

//create instance

var admin = new Admin("Sachin" ,"T");
var manager = new Manager('a' ,'a');
console.log(admin.getFullName());



