var person = {
    name: "John",
    age: 30
  };
  
  // Get array of property names
  var keys = Object.keys(person); // ["name", "age"]
  
  // Create object with specified prototype
  var child = Object.create(person);
  child.name = "Jane"; // child inherits from person
  
  // Object values and entries (ES2017)
  const personExtended = { name: 'John', age: 30, job: 'Developer' };
  
  // Object.values() returns an array of values
  console.log(Object.values(personExtended)); // ['John', 30, 'Developer']
  
  // Object.entries() returns an array of [key, value] pairs
  console.log(Object.entries(personExtended)); 
  // [['name', 'John'], ['age', 30], ['job', 'Developer']]
  
  // Convert entries back to an object
  const entries = Object.entries(personExtended);
  const reconstructed = Object.fromEntries(entries);