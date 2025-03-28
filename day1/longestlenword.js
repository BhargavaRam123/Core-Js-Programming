let lonlen = 0;
let str = "hi this is a line in the worddddd"
let split  = str.split(" ")
console.log(split)
for(let i=0;i<split.length;i++)
{
    if(split[i].length>lonlen)
    {
        lonlen = split[i].length
    }
}
console.log("LONGEST length is",lonlen)