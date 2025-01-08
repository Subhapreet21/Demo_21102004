//! for loop
for (let i = 1; i <= 100; i++) {
  console.log("Good Morning");
}
let n = 100;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i + " is an even number");
  } else {
    console.log(i + " is an odd number");
  }
}
let i = 1;
while (i <= 5) {
  console.log("Hello World");
  i++;
}
let x = 5;
do {
  i++;
  console.log("Batch 3 is awesome.They are responding very well");
} while (i <= x);

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

function addToCart() {
  alert("Item added to cart");
}
