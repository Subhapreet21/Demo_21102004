// Decision making statements
if (true) {
  console.log("If block is executing");
}
if (false) {
  console.log("If block is not executing");
}

let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

age >= 18
  ? console.log("You are eligible to vote")
  : console.log("You are not eligible to vote");

// let day = prompt("Enter a day here: ");
let day = 5;
if (day == 1) {
  console.log("Sunday");
} else if (day == 2) {
  console.log("Monday");
} else if (day == 3) {
  console.log("Tuesday");
} else if (day == 4) {
  console.log("Wednesday");
} else if (day == 5) {
  console.log("Thursday");
} else if (day == 6) {
  console.log("Friday");
} else if (day == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid day");
}

let d = Number(prompt("Enter a day here: "));
console.log(d, typeof d);
switch (d) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// Take three values and print which value is greater among the three values
// Do this with both if else ladder and switch case

let a = 20;
let b = 140;
let c = 100;

if (a > b && a > c) {
  console.log(a + " is the greatest");
} else if (b > a && b > c) {
  console.log(b + " is the greatest");
} else if (c > a && c > b) {
  console.log(c + " is the greatest");
} else {
  console.log("All are equal");
}

let x = 20;
let y = 140;
let z = 100;
switch (true) {
  case x > y && x > z:
    console.log(x + " is the greatest");
    break;
  case y > x && y > z:
    console.log(y + " is the greatest");
    break;
  case z > x && z > y:
    console.log(z + " is the greatest");
    break;
  default:
    console.log("All are equal");
}
