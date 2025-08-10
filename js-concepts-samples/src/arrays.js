// This file demonstrates array creation and manipulation methods in JavaScript.

const fruits = ['apple', 'banana', 'cherry'];

// Array creation
console.log('Initial array:', fruits);

// Adding elements
fruits.push('date'); // Adds 'date' to the end
console.log('After push:', fruits);

fruits.unshift('elderberry'); // Adds 'elderberry' to the beginning
console.log('After unshift:', fruits);

// Removing elements
fruits.pop(); // Removes the last element
console.log('After pop:', fruits);

fruits.shift(); // Removes the first element
console.log('After shift:', fruits);

// Iterating over an array
fruits.forEach(fruit => {
    console.log('Fruit:', fruit);
});

// Using map to create a new array
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase fruits:', upperCaseFruits);