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