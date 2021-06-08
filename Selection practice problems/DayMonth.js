"use strict";
const ps = require("prompt-sync")
const prompt = ps();

let day = prompt("Enter a day of a month: ");
let month = prompt("Enter a month of a year: ");

if ((month == "March" && day >= 21 && day <= 31) ||
   (month == "April" && day >= 1 &&  day <= 30) ||
   (month == "May" && day >=1 && day >= 1 && day <=31) ||
   (month == "June" && day >= 1 && day <= 19)) {
    console.log("True");   
}

else {
    console.log("False")
}