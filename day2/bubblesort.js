let arr = [1,10,3,5,6]

let l = arr.length
for(let i=0;i<l;i++)
for(let j=0;j<l-i-1;j++)
{
    if(arr[j]>arr[j+1])
    {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
    }
}
console.log(arr)