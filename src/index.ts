
// function sum(a:number,b:number):number{
//     return a+b;
// }

// // let sumResult = sum(1,2)

// // const enum Size  {small=1,medium,large}

// // const smallsize = Size.large
// // console.log(smallsize)


// function salary(income:number):number{
//     if(income<40000){
//         return income *1.2;
//     }
//     return income * 1.3
// }

// let ans = salary(3000)
// console.log(ans)


// alias 
// type Employee ={
//     readonly name:string,
//     id:number,
//     start:(data:Date)=>void
// }

// let konain : Employee = {
//     name:'konain',
//     id:1,
//     start:(data:Date)=>{
//         console.log(data)
//     }
// }

// // emp.name = 'neeru'
// console.log(konain.name)


// interface
interface PersonInterface{
    name:string;
    age:number;
    greet():string
}
type persontype = {
    name:string,
    age:number
}

function greetuser(user:persontype){
    return `hi ${user.name}`
}

const ans = greetuser({name:'konain',age:30})
console.log(ans)

class Person  implements PersonInterface{

    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }
    greet(){
        return "hi mr"+this.name
    }
}

const personObject = new Person("konain",30)
console.log(personObject)


// function greet(person:Person):string {
//     return "hello mr "+person.name + "i am glad you are "+person.age + "years old"

// }

// console.log(greet({name:"konain",age:21}))


type shape = rectengle | circle | square;

interface rectengle{
    width:number;
    height:number;
}

interface square{
    side:number;
}

interface circle{
    radius:number;
}

function randomShape(shape:shape){
    console.log(shape)
}
randomShape({radius:4})

enum Arithmetic {
    Add,
    Sub
}

function whichCal(a: number, operation: Arithmetic): number {
    if (operation === Arithmetic.Add) {
        return a + 1;
    } else if (operation === Arithmetic.Sub) {
        return a - 1;
    }

    return -1;
}

console.log(whichCal(2, Arithmetic.Add));