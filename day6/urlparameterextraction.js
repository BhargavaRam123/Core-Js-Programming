const url = "https://example.com/products?id=123&category=electronics"
const split = url.split("?")[1].split("&")
const obj = {}
for(let i=0;i<split.length ;i++)
    {
    const keyarr = split[i].split('=')
    obj[keyarr[0]] = keyarr[1]
}
console.log(obj)