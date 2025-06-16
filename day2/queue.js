class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    isEmpty()
    {
        return this.items.length ===0
    }
    dequeue(){
        return this.isEmpty()?"queue is empty":this.items.shift();
    }
    peek(){
        return this.isEmpty()?"queue is empty":this.items[0]
    }
    size(){
        return this.items.length
    }
    print()
    {
        console.log(this.items.join("->"))
    }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()