class CircularQueue {
    constructor(capacity) {
      this.capacity = capacity;
      this.queue = new Array(capacity);
      this.front = -1;
      this.rear = -1;
      this.size = 0;
    }
    
    enqueue(element) {
      if (this.isFull()) {
        return "Queue is full";
      }
      
      if (this.isEmpty()) {
        this.front = 0;
      }
      
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = element;
      this.size++;
      return true;
    }
    
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      
      const item = this.queue[this.front];
      
      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.capacity;
      }
      
      this.size--;
      return item;
    }
    
    getFront() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue[this.front];
    }
    
    getRear() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue[this.rear];
    }
    
    isEmpty() {
      return this.size === 0;
    }
    
    isFull() {
      return this.size === this.capacity;
    }
  }
  
  const cq = new CircularQueue(3);
  cq.enqueue(1);
  cq.enqueue(2);
  cq.enqueue(3);
  console.log(cq.enqueue(4)); 
  console.log(cq.dequeue()); 
  cq.enqueue(4);
  console.log(cq.getRear()); 