function missingelement(nums) {
    var sortedarr = nums.sort(function (a, b) { return a - b; });
    var min = sortedarr[0], max = sortedarr[sortedarr.length - 1];
    return Array.from({ length: max - min + 1 }, function (_, i) { return min + i; }).filter(function (e) { return sortedarr.indexOf(e) === -1; });
}
var nums = [1, 3, 10, 7];
console.log(missingelement(nums));
