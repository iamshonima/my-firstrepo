// This file demonstrates variable declarations using var, let, and const, showcasing scope and hoisting.

var globalVar = "I am a global variable";

function varTest() {
    var localVar = "I am a local variable";
    console.log(globalVar); // Accessible
    console.log(localVar);   // Accessible
}

varTest();

console.log(globalVar); // Accessible
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

let blockScopeTest = true;

if (blockScopeTest) {
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Accessible
}

console.log(blockScopeTest); // Accessible
// console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined

const constantVar = "I am a constant";
// constantVar = "New value"; // Uncaught TypeError: Assignment to constant variable.

console.log(constantVar); // Accessible