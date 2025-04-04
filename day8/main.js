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

//Using Symbols for "metadata"
const metadataSymbol = Symbol('metadata');
const product = {
  name: 'Laptop',
  price: 999,
  [metadataSymbol]: {
    createdAt: '2023-05-15',
    lastModified: '2023-06-20',
    internalId: 'PROD-5678'
  }
};

console.log(product)