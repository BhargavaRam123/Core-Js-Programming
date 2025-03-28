let str = "aabbaac"
let f=0;
for(let i =0;i<str.length;i++)
{
    if(str[i]===str[str.length-i-1])
    {}
    else{
        f=1
    }
}
if(f===1)
console.log("not a palindrome")
else
console.log("palindrome")