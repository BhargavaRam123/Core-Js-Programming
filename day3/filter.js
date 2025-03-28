var arr = ['Hello', 'ball', 'car', 'cat', 'a;slkfdj;als', 'hello worldd'];
var filteredarr = arr.filter(function (val) { return val.length >= 4; });
console.log(filteredarr);
