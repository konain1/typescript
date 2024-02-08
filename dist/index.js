"use strict";
// function sum(a:number,b:number):number{
//     return a+b;
// }
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hi mr" + this.name;
    }
}
const personObject = new Person("konain", 30);
console.log(personObject);
// function greet(person:Person):string {
//     return "hello mr "+person.name + "i am glad you are "+person.age + "years old"
// }
// console.log(greet({name:"konain",age:21}))
