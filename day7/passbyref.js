let obj  ={
    name:"hello"
}
let obj2 = obj
obj2.name = "world"
obj2.age = 20
console.log(obj,obj2)

//trying to pass it without a reference 
let obj3 = {
    name:"jack",
    age:20
}
const obj4 = {
    ...obj3
}
obj4.name = "james"
console.log(obj3,obj4)

//while using destructuring all the top level properties will get the copy but if there is any nested object the will be call by reference

let rabbit = {
    name:"Nivens",
    coat:{
        color:"white",
        length:"short"
    }
}
let anotherrabbit = {
    ...rabbit
}
anotherrabbit.name = "Bob"
anotherrabbit.coat.color = "Red"
console.log(rabbit,anotherrabbit)