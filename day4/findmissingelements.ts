function missingelement(nums:Array<number>){
    let sortedarr = nums.sort((a,b)=>a-b)
    let min = sortedarr[0],max = sortedarr[sortedarr.length-1]
    return Array.from({length:max-min+1},(_,i)=>min+i).filter((e)=>sortedarr.indexOf(e)===-1)
}
let nums = [1,3,10,7]
missingelement(nums)