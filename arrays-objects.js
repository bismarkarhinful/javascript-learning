// Array Methods
const fruits = ["apple", "banana", "orange"];
console.log("Original array:", fruits);

// Adding/Removing Elements
fruits.push("grape");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.unshift("mango");
console.log("After unshift:", fruits);

fruits.shift();
console.log("After shift:", fruits);

// Array Transformation
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log("Mapped (doubled):", doubled);

const filtered = numbers.filter(num => num > 2);
console.log("Filtered (> 2):", filtered);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduced (sum):", sum);

// Objects
const person = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "Techville"
    },
    greet: function() {
        return `Hello, I'm ${this.name}!`;
    }
};

console.log("Person object:", person);
console.log("Greeting:", person.greet());
console.log("Hobbies:", person.hobbies.join(", "));
