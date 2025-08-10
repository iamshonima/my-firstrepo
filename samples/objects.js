// Objects in JavaScript

const person = {
  name: "Bob",
  age: 30,
  speak() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

person.speak();
