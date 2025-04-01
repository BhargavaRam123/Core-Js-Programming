// Map: key-value pairs where keys can be any type
const userRoles = new Map();
userRoles.set('john', 'admin');
userRoles.set('jane', 'editor');
console.log(userRoles.get('john')); // 'admin'
console.log(userRoles.has('jane')); // true

// Set: collection of unique values
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4]);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]
uniqueNumbers.add(5);
console.log(uniqueNumbers.has(3)); // true