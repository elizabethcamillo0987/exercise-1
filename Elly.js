console.log("=== PART 1: Variable Declarations ===\n");

var myName = "Elizabeth Camillo";
console.log("1. Name (var):", myName);

let myAge = 19;
console.log("2. Age (let, as number):", myAge, "- Type:", typeof myAge);

const PI = 3.1416;
console.log("3. PI constant:", PI);

try {
    PI = 3.14159;
} catch (error) {
    console.log("   Error when trying to reassign PI:", error.message);
}

let isStudent = myAge < 25;
console.log("4. Is Student (age < 25):", isStudent);

const person = {
    name: "Claude",
    age: 25,
    address: {
        street: "123 AI Street",
        city: "Digital City",
        country: "Virtual World"
    },
    hobbies: ["coding", "learning", "helping users"],
    contact: {
        email: "claude@anthropic.com",
        phone: "555-AI-HELP"
    }
};
console.log("5. Person object:", person);

const colors = ["red", "blue", "green", "yellow", "purple", "blue", "orange", "red"];
console.log("6. Colors array:", colors);

console.log("\n=== PART 2: Loop Challenges ===\n");

console.log("Challenge 1: Reverse and Transform");
const words = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Original words:", words);

const reversedUpperWords = words.map(word =>
    word.split('').reverse().join('').toUpperCase()
);

console.log("Reversed and uppercase words:", reversedUpperWords);

console.log("\nChallenge 2: Filtering and Counting");
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
console.log("Original numbers:", numbers);

let evenGreaterThan20 = numbers.filter(number => number % 2 === 0 && number > 20);
let count = evenGreaterThan20.length;

console.log(`Found ${count} numbers: [${evenGreaterThan20.join(', ')}]`);

console.log("\n=== Assignment Complete ===");
console.log("All requirements have been demonstrated successfully!");

console.log("\n=== Bonus: Array Analysis ===");
console.log("Colors array length:", colors.length);
console.log("Unique colors:", [...new Set(colors)]);
console.log("Person's hobbies:", person.hobbies.at.length);