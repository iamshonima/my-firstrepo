function handleError() {
    try {
        // Simulate an error
        throw new Error("This is a sample error");
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

function throwCustomError() {
    throw new Error("This is a custom error");
}

function testCustomError() {
    try {
        throwCustomError();
    } catch (error) {
        console.error("Caught a custom error:", error.message);
    }
}

// Execute the functions to demonstrate error handling
handleError();
testCustomError();