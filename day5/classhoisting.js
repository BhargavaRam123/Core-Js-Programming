// This will throw a ReferenceError
const p = new Person(); 

class Person {
  constructor(name) {
    this.name = name;
  }
}