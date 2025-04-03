//implimenting map function
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(num) {
  return num * num;
});
console.log(squares); // [1, 4, 9, 16, 25]