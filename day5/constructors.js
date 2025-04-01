// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    };
  }
  
  // Creating objects using the constructor
  const person1 = new Person('Alex', 30);
  const person2 = new Person('Sam', 25);
  
  // Using the objects
  console.log(person1.greet()); // "Hello, my name is Alex and I'm 30 years old."
  console.log(person2.greet()); // "Hello, my name is Sam and I'm 25 years old."
  
  // Accessing the constructor property
  console.log(person1.constructor); // [Function: Person]
  console.log(person1.constructor === Person); // true
  
  // Using the constructor property to create a new object
  const person3 = new person1.constructor('Taylor', 28);
  console.log(person3.greet()); // "Hello, my name is Taylor and I'm 28 years old."
  
  // Example with class syntax (modern way to create constructor functions)
  class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
    
    makeSound() {
      return `The ${this.species} says ${this.sound}!`;
    }
  }
  
  const dog = new Animal('dog', 'woof');
  console.log(dog.makeSound()); // "The dog says woof!"
  console.log(dog.constructor === Animal); // true