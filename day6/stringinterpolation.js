const obj ={
    firstname:"bhargava ram",
    lastname:"a",
    age:20
}
const func = (obj)=>{
    return `User:${obj.firstname} ${obj.lastname} (${obj.age} years old)`
}
console.log(func(obj))