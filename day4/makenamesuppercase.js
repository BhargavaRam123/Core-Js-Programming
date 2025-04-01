var func = function (nums) {
    return nums.map(function (elem) { return elem.toUpperCase(); });
};
var elm = ["bhargav", "ram", "hello", "world"];
console.log(func(elm)); // ["JOHN", "MARY", "STEVE"]
