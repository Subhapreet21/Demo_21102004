// Arithmetic operators
console.log(10 + 10); // addition
console.log("10" + 10); // concatenation 1010
console.log(10 + 40 + "hi"); //50hi
console.log("js" + 50 + 50); //js5050
console.log("js" + (50 + 50)); // js100 //due to bodmas or precedence

console.log(10 - 5); // subtraction
console.log("10" - 5); //typecasting
console.log("10" - "hi"); // NaN
console.log("10" - "5"); // 5

console.log(5 * 5); // multiplication
console.log("5" * 5); // 25 //typecasting
console.log("5" * "5"); // 25 //typecasting

console.log(10 / 2); // division
console.log("10" / 2); // 5 //typecasting
console.log("10" / "2"); // 5 //typecasting

console.log(10 % 2); // modulus
console.log("10" % 2); // 0 //typecasting
console.log("10" % "2"); // 0 //typecasting

console.log(2 ** 5); // exponentiation
console.log("2" ** 5); // 32 //typecasting
console.log("2" ** "5"); // 32 //typecasting

let a = 10;
console.log(++a); //11
console.log(a); //11
console.log(a++); //11

let b = 10;
console.log(--b); //9
console.log(b); //9
console.log(b--); //9

// Assignment operators
let x = 50;
console.log(x); //10
console.log((x += 10)); //60
console.log((x -= 10)); //50
console.log((x *= 10)); //500
console.log((x /= 10)); //50
console.log((x <<= 10)); //51200
console.log((x >>= 10)); //50
console.log((x %= 10)); //0
console.log((x **= 10)); //0

// Relational operators
console.log(10 == 10); //true
console.log(10 == "10"); //true //typecasting
console.log("10" == 10); //true //typecasting
console.log(10 === 10); //true
console.log(10 === "10"); //false //typecasting
console.log("10" === 10); //false //typecasting
console.log("hi" == "hi"); //true
console.log("hi" === "hi"); //true
console.log(10 != 10); //false
console.log(10 != "10"); //false //typecasting
console.log("10" != 10); //false //typecasting
console.log(10 !== 10); //false
console.log(10 !== "10"); //true //typecasting
console.log("10" !== 10); //true //typecasting
console.log(10 > 10); //false
console.log(10 > 5); //true
console.log(10 < 10); //false
console.log(10 < 5); //false
console.log(10 >= 10); //true
console.log(10 >= 5); //true
console.log(10 <= 10); //true
console.log(10 <= 5); //false

// Logical operators
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log(!true); //false
console.log(!false); //true
