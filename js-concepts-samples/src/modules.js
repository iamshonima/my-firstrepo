// This file demonstrates how to export and import modules using ES6 syntax, including default and named exports.

export const greet = (name) => {
    return `Hello, ${name}!`;
};

export const farewell = (name) => {
    return `Goodbye, ${name}!`;
};

const defaultGreeting = "Welcome to JavaScript modules!";
export default defaultGreeting;