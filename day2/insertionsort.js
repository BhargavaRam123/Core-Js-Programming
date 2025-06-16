let arr = [1,10,3,5,6]

for(let i= 1;i<arr.length;i++)
{
    let currentvalue = arr[i]
    let j
    for(j = i-1;j>=0 && arr[j]>currentvalue;j--)
    {
        arr[j+1] = arr[j]
    }
    arr[j+1] = currentvalue
}
console.log(arr)