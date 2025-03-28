function reversestring(s) 
{
    let splitstring = s.split("");
    splitstring = splitstring.reverse();
    return  splitstring.join("")
}
console.log(reversestring("hello w"))