let str = " hi this is a line in the sentence"
let result = ""

let f = 0;
for(var i =0;i<str.length;i++)
{
    if(str[i]===' ')
    {
        f=1;
        result +=str[i];
    }
    else if(f===1)
    {
        result += str[i].toUpperCase();
        f=0;
    }
    else{
    result+=str[i];}
}
console.log(result);