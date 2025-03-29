const func = (nums:Array<string>):Array<string>=>{
    return nums.map((elem)=>elem.toUpperCase())
}
let elm = ["bhargav","ram","hello","world"]
console.log(func(elm))// ["JOHN", "MARY", "STEVE"]