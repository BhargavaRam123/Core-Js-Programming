let arr = [1,10,3,5,6]

for(let i=0;i<arr.length;i++)
{
    let lowest = i;
    for(let j = i+1;j<arr.length;j++)
    {
        if(arr[lowest]>arr[j])
            lowest = j
    }
    [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
}

console.log(arr)