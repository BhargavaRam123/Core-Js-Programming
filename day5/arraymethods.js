var numbers = [1, 2, 3, 4, 5];

// forEach for iteration
numbers.forEach(function(number) {
  console.log(number);
});

// map for transforming
var doubled = numbers.map(function(number) {
  return number * 2;
});

// filter for selecting items
var evens = numbers.filter(function(number) {
  return number % 2 === 0;
}); 

// reduce for aggregating
var sum = numbers.reduce(function(total, number) {
  return total + number;
}, 0); 