const checktype = function(val:string|number):void{
    if(typeof val === "string")
    {
        console.log("string vvalue is ",val)
    }
    else{
        console.log("number ",val)
    }
}
checktype("bhargav")
export {}