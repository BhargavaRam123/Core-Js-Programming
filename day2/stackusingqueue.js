class StackUsingQueue {
    constructor() {
      this.queue = [];
    }
    
    push(element) {
      this.queue.push(element);
      
      for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());
      }
    }
    
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.queue.shift();
    }
    
    top() {
      if (this.isEmpty()) {
        return "No elements in Stack";
      }
      return this.queue[0];
    }
    
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  const stack = new StackUsingQueue();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); 
  console.log(stack.top()); 