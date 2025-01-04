// Regular Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Arrow Function
const add = (a, b) => a + b;
console.log("2 + 3 =", add(2, 3));

// Function with Default Parameters
function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(welcome());
console.log(welcome("Bob"));

// Function as Parameter (Callback)
function processArray(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, (num) => num * 2);
console.log("Doubled numbers:", doubled);

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!");
})();
