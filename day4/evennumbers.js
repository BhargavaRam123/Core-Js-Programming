function findEvenNumbers(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; });
}
// Example usage
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = findEvenNumbers(numbers);
console.log(evenNumbers); // [2, 4, 6]
