//Read a number and display the wek day(Sunday, Monday,..)
"use strict";

const ps = require("prompt-sync")
const prompt = ps();

let number = prompt("Enter a Number to Display Week Day: ");
let weekDay=(parseInt(number));

switch(weekDay) {
    
    case 1:
      console.log("Sunday");
    break;

    case 2:
        console.log("Monday");
    break;

    case 3:
        console.log("Tuesday");
    break;

    case 4:
        console.log("Wednesday");
    break;

    case 5:
        console.log("Thursday");
    break;

    case 6:
        console.log("Friday");
    break;

    case 7:
        console.log("Saturday");
    break;

    default:
        console.log("Please enter valid user input");
}