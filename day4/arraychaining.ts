const func = (nums:number[]):number=>{
    return nums.filter((e:number)=>e%2!==0).map((e:number)=>e*2).reduce((sum,c)=>sum+c,0)
}
let arr = [1,2,3,4,5,6]
console.log(func(arr))