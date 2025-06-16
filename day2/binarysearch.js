function binarysearch(arr,val)
{
    let l=0,h=arr.length-1;
    while(l<h)
        {
        let mid = Math.floor((l+h)/2)
        if(arr[mid] === val)
        {
            return mid
        }
        else if(arr[mid]>val)
        {
            h = mid-1;
        }
        else{
            l=mid+1;
        }

    }
    return -1;
}

console.log(binarysearch([1,2,5,7,11],70))