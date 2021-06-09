//Wap to determine the number is prime or not
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

const num = parseInt(prompt("Enter a number which you want to check prime or not: "));
let isPrime = true;

for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0)
        isPrime = false;
    break;
}

if (isPrime == true) {
    console.log("The given number is Prime");
} 

else {
    console.log("The given number is not Prime");
}