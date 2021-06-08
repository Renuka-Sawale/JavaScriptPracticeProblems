"use strict";
const ps = require("prompt-sync")
const prompt = ps();

console.log("Enter number units, ten, hundred to display in word:");
const number = Number(prompt("Number : "));
let digitWord;
if(number == 1) digitWord = "one";
    else if (number == 10) digitWord = "Ten";
    else if (number == 100) digitWord = "Hundred";
    else if (number == 1000) digitWord = "Thousand";
    else if (number == 10000) digitWord = "Ten Thousand";
    else if (number == 100000) digitWord = "One Lakh";
    else if (number == 1000000) digitWord = "Ten Lakh";
    else console.log("Please choose valid user input");
    console.log("The given number in word is: " + digitWord);
    


