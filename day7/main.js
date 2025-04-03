const wm = new WeakMap()
let obj ={}
let value = "val"
wm.set(obj,value)
console.log(wm.get(obj))
console.log(wm)
obj = null
//the entry in the weakmap of the corresponding key will be garbage collected
