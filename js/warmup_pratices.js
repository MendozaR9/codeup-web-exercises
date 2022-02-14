"use strict";

// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)
let grade = [95, 74, 86, 100];
let sum = 0;
function findAverage(average){
    for (var i =0 ; i < grade.length; i++){
        sum += grade[i];
    }
    return sum / grade.length;
}
console.log(findAverage(grade));
