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

/**
 * String.prototype.padEnd()
 * Pads the current string with a given string to a certain length from the end
 */
const padEndExample = "Hello";
console.log(padEndExample.padEnd(10, ".")); // Output: "Hello....."

/**
 * String.prototype.padStart()
 * Pads the current string with a given string to a certain length from the start
 */
const padStartExample = "5";
console.log(padStartExample.padStart(3, "0")); // Output: "005"

/**
 * String.prototype.repeat()
 * Returns a new string with a number of copies of the original string
 */
const repeatExample = "Hello";
console.log(repeatExample.repeat(3)); // Output: "HelloHelloHello"


/**
 * String.prototype.replace()
 * Searches a string for a value and returns a new string with the value(s) replaced
 */
const replaceExample = "Hello World";
console.log(replaceExample.replace("World", "JavaScript")); // Output: "Hello JavaScript"

/**
 * String.prototype.replaceAll()
 * Returns a new string with all matches replaced
 */
const replaceAllExample = "Hello World World";
console.log(replaceAllExample.replaceAll("World", "JavaScript"));


/**
 * String.prototype.search()
 * Searches a string for a specified value or regular expression and returns the position
 */
const searchExample = "Hello World";
console.log(searchExample.search("World")); // Output: 6

/**
 * String.prototype.slice()
 * Extracts a part of a string and returns a new string
 */
const sliceExample = "Hello World";
console.log(sliceExample.slice(0, 5)); // Output: "Hello"

/**
 * String.prototype.split()
 * Splits a string into an array of substrings
 */
const splitExample = "Hello World";
console.log(splitExample.split(" ")); // Output: ["Hello", "World"]


/**
 * String.prototype.startsWith()
 * Checks whether a string begins with specified characters
 */
const startsWithExample = "Hello World";
console.log(startsWithExample.startsWith("Hello")); // Output: true

/**
 * String.prototype.substring()
 * Extracts characters from a string, between two specified indices
 */
const substringExample = "Hello World";
console.log(substringExample.substring(0, 5)); // Output: "Hello"


/**
 * String.prototype.toLowerCase()
 * Converts a string to lowercase letters
 */
const toLowerCaseExample = "Hello World";
console.log(toLowerCaseExample.toLowerCase()); // Output: "hello world"


/**
 * String.prototype.toUpperCase()
 * Converts a string to uppercase letters
 */
const toUpperCaseExample = "Hello World";
console.log(toUpperCaseExample.toUpperCase()); // Output: "HELLO WORLD"


/**
 * String.prototype.trim()
 * Removes whitespace from both ends of a string
 */
const trimExample = "  Hello World  ";
console.log(trimExample.trim()); // Output: "Hello World"


/**
 * String.prototype.trimEnd() / trimRight()
 * Removes whitespace from the end of a string
 */
const trimEndExample = "  Hello World  ";
console.log(trimEndExample.trimEnd()); // Output: "  Hello World"


