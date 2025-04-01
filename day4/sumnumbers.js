var func = function (nums) {
    return nums.reduce(function (sum, current) { return sum + current; }, 0);
};
var nums = [1, 2, 3, 4, 5];
console.log(func(nums));
