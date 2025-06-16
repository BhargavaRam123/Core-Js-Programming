class stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    isempty(){
        return this.items.length === 0
    }
    pope(){
        return this.isempty()?"stack is empty ":this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    
}
let st = new stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
console.log(st.peek())
console.log(st.pope())
console.log(st.pope())