//Wap that takes user inputs and does unit conversion of diffrent length units
//1.Feet to inch 2.Feet to meter 3.Inch to feet 4.Meter to feet
"use strict";

const ps = require("prompt-sync")
const prompt = ps();

let choices = prompt("Choose any one option for length conversation: 1. FeetToInch 2. FeetToMeter 3. InchToFeet 4. MeterToFeet: ");
let option = Number(choices);
switch (option) {
    case 1:
        console.log("FeetToInch");
        const ft1 = prompt("Enter feet: ");
        let result1 = ft1 * 12;
        console.log(`${ft1} feet = ${result1} inches`);
        break;
    case 2:
        console.log("FeetToMeter");
        const ft2 = prompt("Enter feet: ");
        let result2 = ft2 / 3.2808;
        console.log(`${ft2} feet = ${result2} meters`);
        break;
    case 3:
        console.log("InchToFeet");
        const inch1 = prompt("Enter inch: ");
        let result3 = inch1 / 12;
        console.log(`${inch1} inches = ${result3} feet`);
        break;
    case 4:
        console.log("MeterToFeet");
        const inch2 = prompt("Enter inch: ");
        let result4 = inch2 * 3.2808;
        console.log(`${inch2} inches = ${result4} feet`);
        break;
    default: 
        console.log("Please choose proper choice");
}