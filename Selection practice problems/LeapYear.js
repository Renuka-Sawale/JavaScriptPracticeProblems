"use strict";
const ps = require("prompt-sync")
const prompt = ps();

const year = Number(prompt("Enter year: "));
console.log(year);

if (((year % 4 == 0 )&& (year % 100 != 0)) || (year % 400 == 0)) {
    console.log("This is leap year");
} 
else {
    console.log("This is not leap year");
}
       