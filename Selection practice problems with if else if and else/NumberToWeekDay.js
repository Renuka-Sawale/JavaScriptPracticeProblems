"use strict";
const ps = require("prompt-sync")
const prompt = ps();

console.log("Enter a number to display a week day:");
const number = Number(prompt("Number : "));
let day;
if(number > 0 && number <= 7) {
    if (number == 1 ) day = "Sunday";
    else if (number == 2 ) day = "Monday";
    else if (number == 3 ) day = "Tuesday";
    else if (number == 4 ) day = "Wednesday";
    else if (number == 5 ) day = "Thursday";
    else if (number == 6 ) day = "Friday";
    else if (number == 7 ) day = "Saturday";
    console.log("The given number in day is: " + day);
}
else console.log("Please choose valid user input");