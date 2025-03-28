let arr = [2,5,109,5,2,7]
let lar = -1;
for(let i =0;i<arr.length;i++)
{
    if(lar<arr[i])
    {
        lar = arr[i]
    }
}
console.log("largest element in thearray  ", lar)