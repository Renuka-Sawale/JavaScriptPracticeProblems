//Extend the program to take a range of number as input and output the prime no's in that range.
"use strict";
const ps = require("prompt-sync")
const prompt = ps();

const startRange = parseInt(prompt('Enter start number range: '));
const endRange = parseInt(prompt('Enter end number range: '));

console.log(`The prime numbers between ${startRange} and ${endRange} are:`);

for (let i = startRange; i <= endRange; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}