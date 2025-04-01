// Template Literals
const name = 'John';
const greeting = `Hello, ${name}!`; // String interpolation
const multiline = `This is a
multi-line
string`; // Multi-line strings

// Rest and Spread Operators
// Rest operator in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4); // 10

// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread with objects
const defaults = { theme: 'dark', fontSize: 12 };
const userSettings = { fontSize: 16 };
const merged = { ...defaults, ...userSettings }; // { theme: 'dark', fontSize: 16 }

// Default Parameters
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

greet(); // "Hello, Guest!"
greet('John'); // "Hello, John!"