// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+";
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText = "<h1>Header</h1>";
// ele.innerHTML = "<h1>Header</h1>";
// console.log(ele);

// let ele2 = document.getElementsByClassName("test");
// console.log(ele2);
// // console.log(Array.isArray(ele2));
// ele2[0].innerText = "Hello";
// // ele2[0].style.backgroundColor = "tomato";

// // ! Spread operator:-It will take out each and every value from the original array and store it inside one more new array(pure array)

// // ? Syntax: [...variable];

// let x = [...ele2];
// console.log(x, Array.isArray(x));
// x.map((element) => {
//   //   console.log(element);
//   element.style.backgroundColor = "orange";
// });

// let ele = document.getElementsByTagName("div");
// console.log(ele);

// let ele = document.getElementsByName("formdata");
// // console.log(ele);
// [...ele].map((element) => {
//   console.log(element);
// });

// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele3 = document.querySelectorAll(".test");
// console.log(ele3);

// let btn = document.querySelector("#btn");

// !addEventListener("event",()=>{})

// btn.addEventListener("click", () => {
//   //   console.log("Buttton clicked");
//   //   alert("Hi");
//   document.body.style.backgroundColor = "tomato";
// });

// let btn = document.querySelector("#btn");

// btn.addEventListener("dblclick", () => {
//   //   console.log("Double clicked");
//   //   document.body.style.backgroundColor = "tomato";
// });

// let divblock = document.querySelector("#divblock");
// divblock.addEventListener("mouseover", () => {
//   document.body.style.backgroundColor = "yellow";
//   divblock.style.backgroundColor = "lightblue";
// });

// divblock.addEventListener("mouseleave", () => {
//   document.body.style.backgroundColor = "orange";
//   divblock.style.backgroundColor = "aqua";
// });

let inp = document.querySelector("#inp");
inp.addEventListener("keydown", () => {
  console.log("Keydown");
});
inp.addEventListener("keyup", () => {
  console.log("KeyUp");
});
