// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Arrow functions with implicit return
const square = x => x * x;

// Preserves 'this' context
const counter = {
  count: 0,
  increment: function() {
    // 'this' refers to counter object
    setInterval(() => {
      // Arrow function preserves 'this' from parent scope
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};