// let n = Number(prompt("Enter a number here: "));
let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.writeln("* ");
  }
  document.writeln("<br>");
}
// !Output:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

document.writeln("<br>");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i >= j) {
      document.writeln("* ");
    } else {
      document.writeln("&nbsp;");
    }
  }
  document.writeln("<br>");
}
// !Output:
// *
// * *
// * * *
// * * * *
// * * * * *

document.writeln("<br>");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j == n + 1) {
      document.writeln("* ");
    } else {
      document.writeln("&nbsp;&nbsp;");
    }
  }
  document.writeln("<br>");
}
// !Output:
// *          *
//    *    *
//       *
//    *    *
// *          *
