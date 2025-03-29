var func = function (nums) {
    return nums.filter(function (e) { return e % 2 !== 0; }).map(function (e) { return e * 2; }).reduce(function (sum, c) { return sum + c; }, 0);
};
var arr = [1, 2, 3, 4, 5, 6];
console.log(func(arr));
