//Extend the flip coin problem till either heads or tails wins 11 times
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

const Head = 1;
const Tail = 0;
let headCount = 0;
let tailCount = 0;
while (headCount < 11 && tailCount < 11) {
    let flipCoin = Math.floor(Math.random() * 10) % 2;
    switch(flipCoin) {
        case Head:
            headCount++;
        break;
        case Tail:
            tailCount++;
        break;
    }
}
console.log("The count of Head is: "+ headCount);
console.log("The count of Tail is: "+ tailCount);