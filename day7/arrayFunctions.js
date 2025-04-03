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