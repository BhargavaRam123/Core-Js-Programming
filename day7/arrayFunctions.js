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

//destructuring an array
const colors = ['red', 'green', 'blue', 'yellow'];
const [first, second] = colors;

console.log(first);  // 'red'
console.log(second); // 'green'

//skippping elements in destructuring
const numbers6 = [10, 20, 30, 40, 50];
const [, second1, third] = numbers6;

console.log(second1); // 20
console.log(third);  // 30

//using rest operator in destructuring
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const [first1, ...rest] = fruits;

console.log(first1); // 'apple'
console.log(rest);  // ['banana', 'orange', 'grape', 'kiwi']