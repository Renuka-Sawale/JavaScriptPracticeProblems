"use strict";
const ps = require("prompt-sync")
const prompt = ps();

console.log("Enter 3 numbers for arithmetic operation:");
const a = Number(prompt("Enter a: "));
const b = Number(prompt("Enter b: "));
const c = Number(prompt("Enter c: "));

let arithmeticOperation1 = a + b * c;
let arithmeticOperation2 = a % b + c;
let arithmeticOperation3 = c + a / b;
let arithmeticOperation4 = a * b + c;

console.log(" a + b * c " +arithmeticOperation1);
console.log(" a % b + c " +arithmeticOperation2);
console.log(" c + a / b " +arithmeticOperation3);
console.log(" a * b + c " +arithmeticOperation4);

console.log("The Maximum Number is :" + Math.max(arithmeticOperation1,arithmeticOperation2,arithmeticOperation3,arithmeticOperation4));
console.log("The Minimum Number is :" + Math.min(arithmeticOperation1,arithmeticOperation2,arithmeticOperation3,arithmeticOperation4));