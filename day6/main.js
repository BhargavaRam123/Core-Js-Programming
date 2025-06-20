//ES5 allows reserved words as property names:


var obj = {name: "John", new: "yes"}

console.log(obj.new)

//The isArray() method checks whether an object is an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("Hello")); // false

//The forEach() method calls a function (a callback function) once for each element in an array, in order.
var arr = [1,2,3,4,5,6,7,8,9,10]
var sum = 0;
arr.forEach(function(item){
    sum += item;
}
)
console.log(sum) 


//implementing reduceright function
const arr1 = [1, 2, 3, 4, 5];
const val = arr1.reduceRight((accumulator, currentValue) => {
    // console.log(accumulator, currentValue)
    return accumulator + currentValue;
}, 0);
console.log(val)


//implementing array every() function
const arr2 = [1, 2, 3, 4, 5];
const val2 = arr2.every((item) => {
    return item > 0;
})

console.log(val2) // false

//implementing array some() function
const arr3 = [1, 2, 3, 4, 5];
const val3 = arr3.some((item) => {
    return item > 4;
})
console.log(val3) // true    

//implementing array indexOf() function
const arr4 = ["ravi","steve","john","steve"];
console.log(arr4.indexOf("steve")) // 1

//implementing array lastIndexOf() function
const arr5 = ["ravi","steve","john","steve"];
console.log(arr5.lastIndexOf("steve")) // 3


//implementing date.now() function
const date = new Date();
console.log(date.getTime()) 

//implementing date.toisostring() function
const date1 = new Date();
console.log(date1.toISOString()) 

//implementing date.tojson() function
const date2 = new Date();
console.log(date2.toJSON())

//This example creates a getter for a property called fullName:
var person = {
    name: "John",
    surname: "Doe",
    get fullName() {
        return this.name + " " + this.surname;
    }
};
console.log(person.fullName); // John Doe

//This example creates a setter and a getter for the language property:

var person1 = {
    name: "John",
    surname: "Doe",
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    },
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};
person1.lang = "hn"; // set the language to "hn"
console.log(person1.lang); // EN

//implementing defineproperty() function
var person2 = {
    name: "John",
    surname: "Doe"
};
Object.defineProperty(person2, "fullName", {
    get: function() {
        return this.name + " " + this.surname;
    },
    set: function(value) {
        var parts = value.split(" ");
        this.name = parts[0];
        this.surname = parts[1];
    }
});
person2.fullName = "bhargav ram"; // set the full name to "bhargav ram"
console.log(person2.fullName); // John Doe

//implementing Object.create() function
var person3 = {
    name: "John",
    surname: "Doe"
};
var person4 = Object.create(person3); // create a new object with person3 as the prototype
console.log(person4); 

//implementing Object.keys() function
var person5 = {
    name: "John",
    surname: "Doe"
};
var keys = Object.keys(person5); // get the keys of the object
console.log(keys); // ["name", "surname"]

//implementing Object.bind() function
var person6 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
var person7 = {
    firstName:"Steve",
    lastName: "Smith"
};
var fullName = person6.fullName.bind(person7); // bind the fullName function to person7
console.log(fullName()); // Steve Smith

//implementing object destructuring
var person8 = {
    name: "John",
    age: 30,
    city: "New York"
};
var {name, age, city} = person8; // destructuring the object
console.log(name,age,city); // John

//implementing array destructuring
var arr6 = [1, 2, 3];
var [a, b, c] = arr6; // destructuring the array
console.log(a,b,c); // 1 2 3

//implementing spread operator
var arr7 = [1, 2, 3];
var arr8 = [4, 5, 6];
var arr9 = [...arr7, ...arr8]; // spreading the arrays
console.log(arr9); // [1, 2, 3, 4, 5, 6]

//looping over an array
var cars = ["BMW", "Volvo", "Mini"];
var text = "";
for(let a in cars){
    text += cars[a] + " ";
}
console.log(text); // BMW Volvo Mini

//implimenting javascript map
const fruits1 = new Map(
    [
        ["key1",1],
        ["key2",2],
        ["key3",3],
        ["key4",4],
        
    ]
)
console.log(fruits1.get("key1")) // 1

//implimenting sets in js
var set = new Set()
set.add(1)
set.add(2)  
set.add(2)
console.log(set) // Set(2) { 1, 2 }

//implimenting promises in js
const p = new Promise((resolve,reject)=>
{
    setTimeout(() => {
        // resolve("success")
        // reject("rejected")
    }, 0);
})
p
.then((m)=>{
    console.log("message from promise",m)
})
.catch((e)=>
{
    console.log("error occured ",e)
}
)

//implementing default parameters
function multiply(a,b=2){
    return a*b
}
console.log(multiply(5)) // 5

//implementing function rest parameters
function sum1(...args){
    let s = 0;
    for(let i=0;i<args.length;i++){
        s += args[i]
    }
    return s
}
console.log(sum1(1,2,3,4,5)) // 15

//implementing find function
var arr = [1,2,33,44,54]
console.log(arr.find((val)=>{
    return  val>18
}))

//implementing findindex function
console.log(arr.findIndex((val)=>{
    return  val>18
}))

//implementing math.trunc function
var num = 5.6
console.log(Math.trunc(num)) // 5

//implementing math.sign function
var num1 = 252
console.log(Math.sign(num1)) // -1

//implementing math.cubert function
var num2 = 27
console.log(Math.cbrt(num2)) // 3

//implementing math.log10 function
var num3 = 1000
console.log(Math.log10(num3)) // 3

//implementing epsilon, maxsafeint and minsafeint
console.log(Number.EPSILON)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


//implementing math.isinteger function
var num4 = 5.6
console.log(Number.isInteger(num4)) // false

//implementing math.issafeinteger function
var num5 = 12345678901
console.log(Number.isSafeInteger(num5)) // false


//implementing math.isfinite function
var num6 = 0/1
console.log(Number.isFinite(num6)) // true

//implementing math.power function
var num7 = 2
var num8 = 3
console.log(Math.pow(num7,num8)) // 8

//implementing exponentiation operator
var z=2;
z**=3 // 2^3 = 8
console.log(z) // 8

//implementing object entries function
var obj = {name: "John", age: 30, city: "New York"};
var text = Object.entries(obj).flat()
console.log(text) 