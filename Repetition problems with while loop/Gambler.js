//Wap where a gambler starts eith Rs 100 and places Rs 1 bet until he/she goes broke i.e no more money to gamble or reaches the goal of Rs 200. keeps track of numberof times won and number of bets made.  
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let winCount = 0;
let betCount = 0;
let initialBalance = 100;
let choice = 1;
while (choice == 1) {
    initialBalance = 100;
    console.log("Gambler started with initial balance");
    while(initialBalance > 0 && initialBalance < 200) {
        let spin = Math.floor(Math.random() * 10) % 2;
        ++betCount;
        if (spin == 0) {
            --initialBalance;
        }  else {
            ++initialBalance;
        } 
    }
    if (initialBalance == 200) {
        console.log("Gamble won the game");
        winCount++;
        break;
    } else {
        console.log("Gambler lost the game");
    }
    console.log("Total Bets: ", +betCount);
    console.log("Total Win: " + winCount);
    console.log("Press any other key to exit game");
}