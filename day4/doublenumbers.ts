function doubleNumbers(numbers: number[]): number[] {
    return numbers.map(num => num * 2);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const doubled = doubleNumbers(numbers);
  console.log(doubled); // [2, 4, 6, 8, 10]