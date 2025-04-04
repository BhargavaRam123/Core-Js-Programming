//implementing symbols()
const symbl = Symbol()
const symbl1 = Symbol()
console.log(symbl===symbl1)

//using symbols for unique properties in objects

const s = Symbol("property")
let obj = {}
obj[s] = "my value"
console.log(obj)