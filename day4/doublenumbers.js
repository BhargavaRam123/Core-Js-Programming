function doubleNumbers(numbers) {
    return numbers.map(function (num) { return num * 2; });
}
// Example usage
var numbers = [1, 2, 3, 4, 5];
var doubled = doubleNumbers(numbers);
console.log(doubled); // [2, 4, 6, 8, 10]
