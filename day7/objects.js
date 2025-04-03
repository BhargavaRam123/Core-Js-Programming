let person ={
    name:"steve"
}
function modifyobj(obj){
    obj.name = "sam"
}
console.log(person)
modifyobj(person)
console.log(person)

let person1={
    name:"john"
}
function reassignobject(person1){
    person1 = {
        name:"bhargav"
    }
}
console.log(person1)
reassignobject(person1)
console.log(person1)

let arr =[1,2]
function arraymanipulation( arr){
    arr[0]=10
}
console.log(arr)
arraymanipulation(arr)
console.log(arr)