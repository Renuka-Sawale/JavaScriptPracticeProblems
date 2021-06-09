//Wap that takes a command line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
"use strict";
const ps = require("prompt-sync")
const prompt = ps();

console.log("Table of The Powers of 2 less than or equal to 2^n are:");
const num = Number(prompt("Enter integer value: "));

if (num >= 0 && Number.isInteger(num)) {
    for (let i = 0; i <= num; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
} else console.log("Enter integer value which is non negative");