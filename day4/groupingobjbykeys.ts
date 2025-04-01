interface person{
    name:string
    age:number
}
function groupby(persons:person[],key:keyof person){
return persons.reduce((groups,elem)=>
{
    let keyvalue = elem[key]
    console.log(
        "hello"
    )
    if(!groups[keyvalue])
    {
        groups[keyvalue] = []
    }
    groups[keyvalue].push(elem)
    console.log("keyvalue:",keyvalue)
    return groups
},{})
}
let persons:person[] = [
    {
        name:"steve",
        age:30
    },
    {
        name:"raj",
        age:25
    },
    {
        name:"ram",
        age:30
    },
    {
        name:"ravi",
        age:25
    }
]
let final = groupby(persons,"age")
console.log(final)