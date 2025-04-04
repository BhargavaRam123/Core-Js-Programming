//implementing symbols()
const symbl = Symbol()
const symbl1 = Symbol()
console.log(symbl===symbl1)

//using symbols for unique properties in objects

const s = Symbol("property")
let obj = {}
obj[s] = "my value"
console.log(obj)

//example on using symbol
const person ={
    role:"sde"
}
//by providing the parameter value it will be helpfull during the time of debugging
const nsymb = Symbol("name")
const asymb = Symbol("age")
person[nsymb] = "john"
person[asymb] = 20

console.log(person)
console.log(person[nsymb])

//symbols dont show in regular enumerations 


for(key in person)
{
    console.log("key value",key)
}