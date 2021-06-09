//Wap that takes a command line-line argument n and prints the nth harmonic number in the form Hn= 1/1+1/2+ ...+1/n
"use strict";
const ps = require("prompt-sync")
const prompt = ps();

console.log("harmonic number:");
const n = Number(prompt("Enter a integer that is positive: "));
if (n >= 1 && Number.isInteger(n)) {
    let x = 0;
    for (let i = 1; i <= n; i++) {
        x += Math.pow(i, -1);
    }
    console.log("The harmonic number is: " + x);
} else console.log("Enter integers that is positive");
