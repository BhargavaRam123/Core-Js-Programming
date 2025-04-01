const charAtExample = "Hello World";
console.log(charAtExample.charAt(0)); // Output: "H"

/**
 * String.prototype.charCodeAt()
 * Returns the Unicode value of the character at the specified index
 */
const charCodeAtExample = "Hello";
console.log(charCodeAtExample.charCodeAt(0)); // Output: 72

/**
 * String.prototype.concat()
 * Joins two or more strings and returns a new string
 */
const concatExample = "Hello";
console.log(concatExample.concat(" ", "World")); // Output: "Hello World"

/**
 * String.prototype.includes()
 * Checks if a string contains the specified string/characters
 */
const includesExample = "Hello World";
console.log(includesExample.includes("World")); // Output: true

/**
 * String.prototype.endsWith()
 * Checks whether a string ends with the specified characters
 */
const endsWithExample = "Hello World";
console.log(endsWithExample.endsWith("World"));

/**
 * String.prototype.indexOf()
 * Returns the position of the first occurrence of a value in a string
 */
const indexOfExample = "Hello World";
console.log(indexOfExample.indexOf("o")); // Output: 4

/**
 * String.prototype.lastIndexOf()
 * Returns the position of the last occurrence of a value in a string
**/
const lastIndexOfExample = "Hello World";
console.log(lastIndexOfExample.lastIndexOf("o")); // Output: 7