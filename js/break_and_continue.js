'use strict';
var breakNumber

function OddBetween1And50() {
    let isodd = false;
    do {
        breakNumber = prompt("Give me an odd number between 1 and 50 to skip");
        if (breakNumber % 2 !== 0 && breakNumber > 1 && breakNumber < 50) {
            break
        } else {
            alert(breakNumber + " is not a valid input")
        }
    } while (!isodd);
    console.log("Number to skip is: " + breakNumber);
    return breakNumber;
}

function skipsChosinOddNum() {
    OddBetween1And50();
    for (let i = 1; i <= 50; i++) {
        if (i === parseInt(breakNumber)) {
            console.log("Yikes! skipping number: " + parseInt(breakNumber));
            continue
        } else if (i % 2 === 0) {
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}
skipsChosinOddNum();