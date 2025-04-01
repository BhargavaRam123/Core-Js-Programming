const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false

// Can specify start position
console.log(numbers.includes(1, 1)); // false (start from index 1)