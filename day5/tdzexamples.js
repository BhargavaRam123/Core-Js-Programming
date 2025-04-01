// Examples of Temporal Dead Zone (TDZ) in JavaScript

// Example 1: ReferenceError when accessing variable in TDZ
{
    // bestFood's TDZ starts here (at the beginning of this block's local scope)
    console.log(bestFood); // returns ReferenceError because bestFood's TDZ continues here
    let bestFood = "Vegetable Fried Rice"; // bestFood's TDZ ends here
  }
  
  // Example 2: Declaration without initialization still creates TDZ
  {
    let bestFood; // bestFood's TDZ ends here
    console.log(bestFood); // returns undefined because bestFood's TDZ does not exist here
    bestFood = "Vegetable Fried Rice";
    console.log(bestFood); // returns "Vegetable Fried Rice"
  }
  
  // Example 3: TDZ in function scope
  {
    // Declare a variable:
    let bestFood = "Fish and Chips";
  
    // Declare another variable:
    let myBestMeal = function () {
      console.log(bestFood); // ReferenceError - accessing bestFood before initialization in this scope
      let bestFood = "Vegetable Fried Rice"; // This creates a new variable in function scope
    };
  
    // Invoke myBestMeal function:
    myBestMeal();
    // The code above will return:
    // "Uncaught ReferenceError: Cannot access 'bestFood' before initialization"
  }
  
  // Commented out example with ReferenceError
  /*
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  const p = new Person(); 
  console.log(val) // ReferenceError
  var val = 23
  */