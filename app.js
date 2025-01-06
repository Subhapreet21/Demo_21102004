// // console.log(10);
// // document.write(1000);

// // var a = 10;
// // a = "hi"; // Re-intialization
// // console.log(a);

// var user = "Mahesh";
// var user = "Ramesh"; // Re-declaration
// console.log(user);

// let a = 10;
// a = 100;
// console.log(a);

// // let b = 20;
// // let b = 200;
// // console.log(b); // Error

// const dob = 2004;
// // dob = 2005; // Error
// // const dob = 2005; // Error
// console.log(dob);

// let str1 = "doublequotes";
// console.log(str1);
// console.log(typeof str1);

// let str2 = "singlequotes";
// console.log(str2);
// console.log(typeof str2);

// let str3 = `backticks`;
// console.log(str3);
// console.log(typeof str3);

// let num1 = 10;
// console.log(num1, typeof num1);

// let num2 = 10.5;
// console.log(num2, typeof num2);

// let bool1 = true;
// console.log(bool1, typeof bool1);

// let bool2 = false;
// console.log(bool2, typeof bool2);

// let a;
// console.log(a, typeof a);

// let a = null;
// console.log(a, typeof a);

// console.log(10n, typeof 10n);

// Demonstrating basic data types in JavaScript

// Variables with 'var'
var user = "Mahesh";
var user = "Ramesh"; // Re-declaration allowed
console.log(user); // Output: Ramesh

// Variables with 'let'
let a = 10;
a = 100; // Re-assignment allowed
console.log(a); // Output: 100

// let b = 20;
// let b = 200; // Re-declaration not allowed with 'let'
// console.log(b); // Error

// Variables with 'const'
const dob = 2004;
// dob = 2005; // Re-assignment not allowed with 'const'
// const dob = 2005; // Re-declaration not allowed with 'const'
console.log(dob); // Output: 2004

// String data types
let str1 = "doublequotes";
console.log(str1); // Output: doublequotes
console.log(typeof str1); // Output: string

let str2 = "singlequotes";
console.log(str2); // Output: singlequotes
console.log(typeof str2); // Output: string

let str3 = `backticks`;
console.log(str3); // Output: backticks
console.log(typeof str3); // Output: string

// Number data types
let num1 = 10;
console.log(num1, typeof num1); // Output: 10 number

let num2 = 10.5;
console.log(num2, typeof num2); // Output: 10.5 number

// Boolean data types
let bool1 = true;
console.log(bool1, typeof bool1); // Output: true boolean

let bool2 = false;
console.log(bool2, typeof bool2); // Output: false boolean

// Undefined data type
let uninitializedVar;
console.log(uninitializedVar, typeof uninitializedVar); // Output: undefined undefined

// Null data type
let nullVar = null;
console.log(nullVar, typeof nullVar); // Output: null object

// BigInt data type
console.log(10n, typeof 10n); // Output: 10n bigint
