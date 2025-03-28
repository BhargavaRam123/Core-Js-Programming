const arr:string[] = ['Hello','ball','car','cat','a;slkfdj;als','hello worldd']
const filteredarr:string[] = arr.filter((val:string):boolean=>val.length>=4)
console.log(filteredarr)