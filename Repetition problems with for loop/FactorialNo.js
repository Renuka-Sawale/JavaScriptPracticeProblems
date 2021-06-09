//Wap that computes factorial of a number 
"use strict";
const ps = require("prompt-sync")
const prompt = ps();

let num = prompt("Enter the Number: ");
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("Factorial is: " + fact);