//Read a number 1, 10, 100, 1000, etc and display unit, ten, hundread,....
"use strict";

const ps = require("prompt-sync")
const prompt = ps();

let numbers = prompt("Enter number units, ten, hundred to display in word: ");
let num = parseInt(numbers);
console.log(numbers);

switch(num) {
    case 10:
        console.log("Ten");
    break;
    
    case 100:
        console.log("Hundred");
    break;

    case 1000:
        console.log("Thousand");
    break;

    case 10000:
        console.log("Ten Thousand");
    break;

    case 100000:
        console.log("Lakh");
    break;

    case 1000000:
        console.log("Ten Lakh");
    break;

    case 10000000:
        console.log("Crores");
    break;

    case 100000000:
        console.log("Ten Crores");
    break;

    case 1000000000:
        console.log("Arabs");
    break;

    default:
        console.log("Please choose valid user input");
}