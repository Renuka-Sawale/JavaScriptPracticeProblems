//Wap that takes a command line argument n and prints a table of powers of 2 that are less than or equal 2^n till 256 is reached
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let n = prompt("The table of powers of 2 that are less than or equal 2^n till 256 are: ");
let count = 1;
let power = 1;
while (power <= 256 && count <= n) {
    console.log(power);
    power = power * 2;
    count++;
}