//Read a single digit number and write the number in word using case
"use strict";

const ps = require("prompt-sync")
const prompt = ps();

let number = prompt("Enter Single Digit Number to Display in Word: ");
let num=(parseInt(number));

switch(num) {
    
    case 0:
      console.log("Zero");
    break;

    case 1:
        console.log("One");
    break;

    case 2:
        console.log("Two");
    break;

    case 3:
        console.log("Three");
    break;

    case 4:
        console.log("Four");
    break;

    case 5:
        console.log("Five");
    break;

    case 6:
        console.log("Six");
    break;

    case 7:
        console.log("Seven");
    break;

    case 8:
        console.log("Eight");
    break;

    case 9:
        console.log("Nine");
    break;

    default:
        console.log("Please enter valid user input");
}