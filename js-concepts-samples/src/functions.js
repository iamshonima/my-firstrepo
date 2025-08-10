// This file illustrates function declarations, expressions, and arrow functions, including examples of parameters and return values.

function regularFunction(param1, param2) {
    return param1 + param2;
}

const functionExpression = function(param1, param2) {
    return param1 * param2;
};

const arrowFunction = (param1, param2) => {
    return param1 - param2;
};

// Example usage
console.log(regularFunction(5, 10)); // 15
console.log(functionExpression(5, 10)); // 50
console.log(arrowFunction(10, 5)); // 5