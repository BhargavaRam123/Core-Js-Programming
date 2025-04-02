let camelcasevalue = "userFirstName"
let string =""
for(let i =0;i<camelcasevalue.length;i++)
{
    if(camelcasevalue.charCodeAt(i)>=65&&camelcasevalue.charCodeAt(i)<=90)
    {
        string+='-'
        string+=camelcasevalue[i].toLowerCase()
    }
    else
    string+=camelcasevalue[i]
}
console.log(string)