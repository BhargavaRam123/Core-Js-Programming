//implimenting map function
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(num) {
  return num * num;
});
console.log(squares); // [1, 4, 9, 16, 25]

//implimenting filter function
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6]

//implimenting reduce function
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value
console.log(sum); // 15

//implementing forEach function
const numbers5  = [1, 2, 3, 4, 5];
numbers5.forEach(function(num) {
  console.log(num * 2);
});
// Logs: 2, 4, 6, 8, 10

// Using arrow function
numbers5.forEach(num => console.log(num * 2));