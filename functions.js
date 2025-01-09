// !function without parameters
function addToCart() {
  alert("Item added to cart");
}
function demo() {
  console.log("function without parameters");
}
demo();

// !function with parameters
function userDetails(name, age, city) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
userDetails();
userDetails("John", 25, "New York");

// !Anonymous function
// function() {
//   console.log("Anonymous function");
// }

// ! Function expression
let x = function () {
  console.log("Function expression is executing");
};
console.log(x); // Output: [Function: x]
x(); // Function expression is executing

// !IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE is executing");
})();

// !Arrow function
// Different consice ways of writing arrow functions

// let a = () => {console.log("Arrow function");}
// a();

// let a=()=>console.log("Arrow function");
// a();

// let b=_=>console.log("Arrow function");
// b();

// let c=a=>console.log(a);
// c(5);

// let d=(a,b)=>console.log(a+b);
// d(5,10);

// let e =_=> {
//   console.log("Hi");
//   console.log("Hello");
//   console.log("Bye");
// };
// e();

let e = (_) => {
  console.log("Hi");
  console.log("Hello");
  console.log("Bye");
};
e();
console.log("");
let f = (_) => console.log("Hi");
console.log("Hello");
console.log("Bye");

f();

// If we do not keep the curly braces, then the printing order will be different
