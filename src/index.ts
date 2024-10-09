

//  const jd = {
// name: 'JD',
// age: 44,
// address: '555 coding',
// phone: '777-777-7777'
// };
// const bob = {
//     name: 'JD',
//     age: 44
//     address: '777 old street',
// phone: '888-88-8888',
//     };


// function Person(userName, userAge, address, phone) {
// this.name = userName;
// this.age = userAge;
// this.address = address;
// this.phone = phone;

// this.printBirthday = function() {
//     console.log(`${this.name} is ${this.age} years old`);
// }
// }
// Person.prototype.printBirthday = function() {
//     console.log(`${this.name} is ${this.age} years old`);
// }

class Animal {
    constructor(public name: string, public species: string) {
        this.name = name; 
        this.species = species; 
    }
    printSpecies() {
        console.log`${this.name} `
    }
}
class Person {
    constructor( public name: string, public age: number, public address: string, public phone: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    printBirthday() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const jd = new Person('JD', 44, '555 coding dr', '777777777');
const bob = new Person('Bob', 99, '777 old st', '888888888');
const jane = new Person('Jane', 99, '1999 old street', '888888888');
const frank = new Person('Frank', 99, '1111 old st', '888888888');

 bob.printBirthday();


// console.log(jd);
// console.log(bob);
// console.log(jane);
// console.log(frank);