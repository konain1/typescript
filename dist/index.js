"use strict";
// function sum(a:number,b:number):number{
//     return a+b;
// }
function greetuser(user) {
    return `hi ${user.name}`;
}
const ans = greetuser({ name: 'konain', age: 30 });
console.log(ans);
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
function randomShape(shape) {
    console.log(shape);
}
randomShape({ radius: 4 });
