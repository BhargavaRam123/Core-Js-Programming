const func = <x>(val:Array<x>):x=>{
    return val[0];
}
console.log(func<number>([1,2,4,5,6,7]))
console.log(func<string>(["hello","universe","cat"]))