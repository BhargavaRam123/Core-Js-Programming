//implementing symbols()
const symbl = Symbol()
const symbl1 = Symbol()
console.log(symbl===symbl1)

//using symbols for unique properties in objects

const s = Symbol("property")
let obj = {}
obj[s] = "my value"
console.log(obj)

//example on using symbol
const person ={
    role:"sde"
}
//by providing the parameter value it will be helpfull during the time of debugging
const nsymb = Symbol("name")
const asymb = Symbol("age")
person[nsymb] = "john"
person[asymb] = 20

console.log(person)
console.log(person[nsymb])

//symbols dont show in regular enumerations 


for(key in person)
{
    console.log("key value",key)
}

//Using Symbols for "metadata"
const metadataSymbol = Symbol('metadata');
const product = {
  name: 'Laptop',
  price: 999,
  [metadataSymbol]: {
    createdAt: '2023-05-15',
    lastModified: '2023-06-20',
    internalId: 'PROD-5678'
  }
};

console.log(product)

//implementing error handling in js

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        console.log("Execution completed.");
    }
}

console.log(divide(10, 0)); // Error: Division by zero is not allowed.

const arr = [2,31,1,10,5]
arr.sort((a,b)=>b-a)
console.log(arr)
const sortobj = [
    {
        id:1,
        year:2001
    },
    {
        id:2,
        year:2003
    },
    {
        id:3,
        year:2002
    },
]
sortobj.sort((a,b)=>a.year-b.year)
console.log(sortobj)

var message = "Global message";

function showMessage() {
    console.log(message); // Accessing the local variable
    // var message = "Local message"; // This "shadows" the global variable
}

showMessage();
console.log(message); 

// Create a Number object
const specialValue = new Number(42);

// Attach custom properties
specialValue.description = "The answer to life, the universe, and everything";
specialValue.unit = "light-years";
specialValue.calculateDouble = function() {
  return this.valueOf() * 2;
};

// Access the properties and methods
console.log(specialValue.valueOf());         // 42 (the primitive value)
console.log(specialValue.description);       // "The answer to life, the universe, and everything"
console.log(specialValue.unit);              // "light-years"
console.log(specialValue.calculateDouble()); // 84

// Example showing why new Number() can be problematic
const primitiveNum = 5;
const objectNum = new Number(5);

console.log(primitiveNum == objectNum);  // true (coercion happens)
console.log(primitiveNum === objectNum); // false (different types)

// JavaScript already handles method access on primitives:
console.log((123).toString()); // "123" - works without new Number()