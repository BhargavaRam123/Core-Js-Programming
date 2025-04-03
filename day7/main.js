const wm = new WeakMap();
let obj = {};
let value = "val";
wm.set(obj, value);
console.log(wm.get(obj));
console.log(wm);
obj = null;
//the entry in the weakmap of the corresponding key will be garbage collected

//implementation of weakset
let ws = new WeakSet();
let obj1 = {};
let obj2 = {};
ws.add(obj1);
ws.add(obj2);
console.log(ws.has(obj1)); //true
console.log(ws.has(obj2)); //true
obj1 = null;
console.log(ws.has(obj1)); //false

//implementing iterables(map)

let mp = new Map();
mp.set(1, "hello");
mp.set(2, "hello");
mp.set(3, "hello");
for (let [key, value] of mp) {
  console.log(key, value);
}

//implelmenting iterables(set)
const st = new Set();
st.add(1);
st.add(2);
st.add(3);
for (let val of st) {
  console.log(val);
}
