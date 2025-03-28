let str = "aabbccdef";


let arr = new Array(255).fill(0); 

for(let i = 0; i < str.length; i++) 
{

    let charCode = str.charCodeAt(i);
    arr[charCode]++;
}

let breakindex = -1;
for(let i = 0; i < str.length; i++) 
{
    let charCode = str.charCodeAt(i);
    if(arr[charCode] === 1) 
    { 
        breakindex = i;
        break; 

    }
}

let ans = "";
console.log("breakindex", breakindex);
for(let i = 0; i < breakindex;) { 
    let charCode = str.charCodeAt(i);
    ans += str[i];
    ans += arr[charCode];
    // console.log(ans)
    i+=arr[charCode]
}

console.log(ans);