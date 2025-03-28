interface employee{
    salary:number,
    role:string
}
interface person{
    name:string,
    contact:number
}
interface sm extends employee, person{}

type staffmember = person&employee
function createmember(name:string,salary:number,contact:number,role:string){
    return {
        name,salary,contact,role
    }
}

const empl:sm = createmember("bhargav",323223,32323,"deve")

console.log(empl)