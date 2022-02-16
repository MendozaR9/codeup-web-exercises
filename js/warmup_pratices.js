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

// Create an object representing a person. It should have properties representing:
// names (an array of strings)
// date of birth
// occupation
let person =[
    {
    name:["Robert","Smith"],
    dateOfBirth: "05/09/1990",
    occupation: "firefighter"
    },

    {
        name: ["Joe","Swatson"],
        dateOfBirth: "03/26/1987",
        occupation: "Police"
    }
];
console.log(person);
console.log(person[0].name);
console.log(person[0].dateOfBirth);
console.log(person[0].occupation);