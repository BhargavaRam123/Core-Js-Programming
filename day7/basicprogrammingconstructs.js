//difference between let, const, and var
// var example - can be redeclared and reassigned
var x = 10;
var x = 20;
x = 30;
console.log(x); // 30

// let example - cannot be redeclared but can be reassigned
let y = 10;
// let y = 20; // Invalid
y = 20;
console.log(y); // 20

// const example - cannot be redeclared or reassigned
const z = 10;
// const z = 20; // Invalid
// z = 20;      // Invalid
console.log(z); // 10

// Scope differences
function scopeTest() {
  if (true) {
    var varVariable = "var is function-scoped";
    let letVariable = "let is block-scoped";
    const constVariable = "const is block-scoped";
  }

  console.log(varVariable); // "var is function-scoped" (accessible)
  // console.log(letVariable); // Error
  // console.log(constVariable); // Error
}

scopeTest();


//function declaration vs function expression
function greet() {
  console.log("Hello from function declaration!");
}
greet(); // "Hello from function declaration!"
//in the function expression hoisting only happens if we use var
const greetExpression = function() {    
  console.log("Hello from function expression!");
}
greetExpression(); // "Hello from function expression!"
