function findEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = findEvenNumbers(numbers);
  console.log(evenNumbers); // [2, 4, 6]