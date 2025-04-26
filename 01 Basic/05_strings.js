//Strings

//Creating String//

//Using string literals
let singleQuotes = "Hello";
let doubleQuotes = "Hello";
let backTicks = `Hello`;

//Using String constructor (less common)
let strObj = new String("Hello");

//String Properties//

let str1 = "javascript";

//get length of string
console.log(str1.length); //10

//String Methods//
//Basic methods

let str = "Hello World";

//Access characters
console.log(str.charAt(1)); // 'e'
console.log(str[1]); //'e'  (we can access character like arrays)


// Concatenation
let newStr = str.concat("!", " Welcome"); // "Hello World! Welcome"


// Case conversion
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"

//searching methods

let str2 = "JavaScript is awesome";

// Index of substring
console.log(str2.indexOf("script")); // 4
console.log(str2.indexOf("Script")); // -1 (case sensitive)
console.log(str2.lastIndexOf("a")); // 3

// // Includes (ES6)
// console.log(str2.includes("awesome")); // true

// // StartsWith/EndsWith (ES6)
// console.log(str2.startsWith("Java")); // true
// console(str2.endsWith("some")); // true


//extraction methods

let str3 = "Hello World";

// Substring
console.log(str3.substring(1, 4)); // "ell"
console.log(str3.slice(1, 4)); // "ell"
console.log(str3.substr(1, 4)); // "ello" (deprecated)

// Split into array
console.log(str3.split(" ")); // ["Hello", "World"]


//modification methods

let str4 = "   Hello World   ";

// Trim whitespace
console.log(str4.trim()); // "Hello World"
console.log(str4.trimStart()); // "Hello World   "
console.log(str4.trimEnd()); // "   Hello World"

// Replace
console.log(str4.replace("World", "JS")); // "   Hello JS   "

// Repeat
console.log("ha".repeat(3)); // "hahaha"



//Template Literals (ES6)


let name = "Alice";
let age = 25;

// Multi-line strings
let multiLine = `This is
a multi-line
string`;

// String interpolation
let greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting); // "Hello, Alice! You are 25 years old."

// Expressions
console.log(`Next year you'll be ${age + 1}`); // "Next year you'll be 26"



//Unicode Support
//JavaScript strings are UTF-16 encoded:

// Emoji support
let emoji = "😊";

// Unicode escape sequences
console.log("\u{1F60A}"); // "😊"
console.log("\u0041"); // "A"

// Code point access
console.log("😊".codePointAt(0)); // 128522



//String Immutability

//Strings in JavaScript are immutable - they cannot be changed once created. Methods that appear to modify strings actually return new strings.



let str5 = "hello";
str5[0] = "H"; // This won't work
console.log(str5); // "hello"

// Need to create a new string
str5 = "H" + str5.slice(1);
console.log(str5); // "Hello"


//String Conversion


// Number to string
let num = 42;
console.log(num.toString()); // "42"

// Object to string
let obj = {x: 1};
console.log(obj.toString()); // "[object Object]"

// Using String()
console.log(String(123)); // "123"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"