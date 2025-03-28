let arr = [1,3,10,9,8,2]
let profit = -1;
let id=-1,jd=-1;
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]-arr[i]>profit)
        {
            profit = arr[j]-arr[i];
            id = i;
            jd = j;
        }
    }
}
console.log("max profit",profit)
console.log("he bought at day ",id+1," he sold at day",jd+1,)