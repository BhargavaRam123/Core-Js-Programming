
const exponentialSearch = (arr, x) => {
    let n = arr.length;
    if (arr[0] == x) return 0;
    let i = 1;
    while (i < n && arr[i] <= x) {
        i = i*2;
    }
    return binarySearch(arr, i/2, Math.min(i, n), x);
}

const binarySearch = (arr, l, r, x) => {
    if (r >= l) {
        let mid = l + (r - l) / 2;
        if (arr[mid] == x) return mid;
        
        if (arr[mid] > x) {
             return binarySearch(arr, l, mid - 1, x);   
        }
        
        return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
}

let testArray = [1,2,3,4,5,6,7,8,9,10];
let x = 9;
console.log(exponentialSearch(testArray, x));
