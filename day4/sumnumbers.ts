const func = (nums:Array<number>):number=>{
    return nums.reduce((sum,current)=>sum+current,0)
}

let nums = [1,2,3,4,5]
console.log(func(nums))