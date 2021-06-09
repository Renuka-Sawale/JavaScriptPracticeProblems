//Write a program that computes a factorial of a number taken as input 5 Factorial-5!= 1*2*3*4*5
"use strict";
const ps = require("prompt-sync")
const prompt = ps();

let number = prompt("Enter the number :");
console.log("Number is: " + number);
console.log("Prime Factors are:");
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        for (let j = 2; j <= i; j++) {
            if (j == i) {
                console.log(i);
            }
            if (i % j == 0)
                break;
        }
    }
}