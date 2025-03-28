class Stack {
    constructor() {
      this.items = [];
    }
    
    push(element) {
      this.items.push(element);
    }
    
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
    
    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack";
      }
      return this.items[this.items.length - 1];
    }
    
    isEmpty() {
      return this.items.length === 0;
    }
    
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  function isBalanced(str) {
    const stack = [];
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push(str[i]);
      } else if (str[i] === ')') {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
    
    return stack.length === 0;
  }
  
  console.log(isBalanced("((()))")); 
  console.log(isBalanced("(()")); 