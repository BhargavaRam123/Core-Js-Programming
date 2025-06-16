class Node{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}
class linkedlist{
    constructor(){
        this.head = null

    }
    append(value)
    {
        let newnode = new Node(value)
        if(!this.head)
        {
            this.head = newnode
            return
        }
        let current = this.head
        while(current.next)
        {
            current = current.next
        }
        current.next = newnode
    }
    printlist(){
        let current = this.head
        let result = ""
        while(current.next)
        {
            result+=current.value+'->'
            current = current.next
        }result+=current.value
        console.log(result+"->null")

    }
} 

let list = new linkedlist()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.printlist()