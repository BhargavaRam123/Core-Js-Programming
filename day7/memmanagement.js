//memory management in js
// Experiment with code like this
let num1 = 10;
let num2 = num1;
num1 = 20;
console.log(num1, num2); // What happens here?

let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20;
console.log(obj1.value, obj2.value); // What happens here?