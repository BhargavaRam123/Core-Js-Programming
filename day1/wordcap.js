function ischarvowel(c)
{
    return ['a','e','i','o','u'].indexOf(c.toLowerCase())!==-1;
}
var str = "hello world";
let count =0;
for(var i =0;i<str.length;i++)
{
    if(ischarvowel(str[i])===true)
    {

        count = count +1;
    }
}
console.log(count)