"use strict";
const ps = require("prompt-sync")
const prompt = ps();

console.log("Enter a single digit number to write number in word:");
const number = Number(prompt("Number : "));
let digitWord;
if (number >= 0 && number <= 9) {
    if (number == 0) digitWord = "Zero";
    else if (number == 1) digitWord = "One";
    else if (number == 2) digitWord = "Two";
    else if (number == 3) digitWord = "Three";
    else if (number == 4) digitWord = "Four";
    else if (number == 5) digitWord = "Five";
    else if (number == 6) digitWord = "Six";
    else if (number == 7) digitWord = "Seven";
    else if (number == 8) digitWord = "Eight";
    else if (number == 9) digitWord = "Nine";
    console.log("The given number in word is: " + digitWord);
}
else console.log("Please choose valid user input");