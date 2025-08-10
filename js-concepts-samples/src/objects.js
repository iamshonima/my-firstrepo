// This file demonstrates object creation, property access, and methods.
// It includes examples of object destructuring and spread syntax.

const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Accessing properties
console.log(person.name); // John Doe
console.log(person['age']); // 30

// Calling a method
person.greet(); // Hello, my name is John Doe

// Object destructuring
const { name, age } = person;
console.log(name); // John Doe
console.log(age); // 30

// Spread syntax
const additionalInfo = { job: 'Developer', country: 'USA' };
const completeProfile = { ...person, ...additionalInfo };
console.log(completeProfile); 
// { name: 'John Doe', age: 30, greet: [Function: greet], job: 'Developer', country: 'USA' }