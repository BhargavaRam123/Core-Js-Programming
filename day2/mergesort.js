function merge(left,right)
{
    let sortedarr = []
    while(left.length&&right.length)
    {
        if(left[0]<right[0])
        {
            sortedarr.push(left.shift())
        }
        else
        {
            sortedarr.push(right.shift())
        }
    }
    return [...sortedarr,...left,...right]
}
function mergesort(arr)
{
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergesort(arr.slice(0,mid))
    let right = mergesort(arr.slice(mid))
    return merge (left,right)
}
console.log(mergesort([3,9,10,2,1]))

// const arr = [21,11,9,42,31,5];
// let N = arr.length;
// //divide and conquer approach.

// let low = 0, high = N-1;
// merge_sort(low, high, arr);

// //divide
// function merge_sort(low, high, arr) {
//     // console.log("hello ",low,high)
//   if(low===high)
//      return
//   let mid = Math.floor(low + (high - low) / 2);
//   merge_sort(low, mid, arr);
//   merge_sort(mid + 1, high, arr);
//   merge(low, mid, high, arr);
// }

// //conquer => and do the operation(sorting) while doing that
// function merge(low, mid, high, arr) {
//   let temp = [];
//   let i=low,j=mid+1
//   while(i <= mid&&j<=high) {
//     if(arr[i] > arr[j]) {
//       temp.push(arr[j]);
//       j++;
//     } else if(arr[i] <= arr[j]) {
//       temp.push(arr[i]);
//       i++;  
//     }
//   }
//   while(i <= mid) {
//     temp.push(arr[i]);
//     i++;
//   }
//   while(j <= high) {
//       temp.push(arr[j]);
//       j++;
//     }
//     // console.log("temp value",temp)
//     for(let i = 0; i < temp.length; ++i) {
//     //   console.log("hello")
//     arr[low+i] = temp[i];
//   }
// }

// console.log(arr);