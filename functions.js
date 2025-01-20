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
// Different concise ways of writing arrow functions

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

// !Return keyword
function demo2(a, b) {
  return a + b;
}
let y = demo2(5, 5);
console.log(y);

let y1 = (a, b) => a + b; //implicit return
let a2 = y1(10, 20);
console.log(a2);

let z = (a, b) => {
  //explicit return
  return a + b;
};
let b2 = z(10, 100);
console.log(b2);

// !Higher order function and callback function
function hof(a) {
  return a(10, 5);
}
let v = hof(function (a, b) {
  return a + b;
});
console.log(v);

function parent(callback) {
  //Higher order function
  return callback;
}
console.log(parent(add(10, 20)));

function add(a, b) {
  //callback function
  return a + b;
}

// !Nested function
// var a5 = 100;
// let b5 = "Hi";

// function o() {
//   var user = "Vinay";
//   let comapny = "Google";
//   const salary = 1234567890;
//   console.log(user);
//   console.log(comapny);
//   console.log(salary);
//   console.log(a5, b5);
// }
// o();

var a5 = 100;
let b5 = "Hi";

function o() {
  var user = "Vinay";
  let comapny = "Google";
  const salary = 1234567890;
  console.log(user);
  console.log(comapny);
  console.log(salary);
  console.log(a5, b5);
}
o();

function p() {
  let x1 = 10;
  let y1 = 20;
  console.log(x1, y1);
}

p();

// !Closure function
function x2() {
  let a = 10;
  let b = 20;
  console.log(a, b);
  function y2() {
    let c = "JS";
    let d = "Python";
    console.log(c, d);
    function z2() {
      const username = "Harish";
      console.log(username);
      console.log(a);
      console.log(d);
    }
    z2();
  }
  y2();
}
x2();
