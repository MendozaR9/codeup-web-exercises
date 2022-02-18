// "use strict";
//
// // Write a function called findAverage that takes in an array of integers representing grades and returns the average.
// //     Example input: [95, 74, 86, 100]
// // Example output: 88.75 (edited)
// let grade = [95, 74, 86, 100];
// let sum = 0;
// function findAverage(average){
//     for (var i =0 ; i < grade.length; i++){
//         sum += grade[i];
//     }
//     return sum / grade.length;
// }
// console.log(findAverage(grade));
//
// // Create an object representing a person. It should have properties representing:
// // names (an array of strings)
// // date of birth
// // occupation
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
// function Person(names, occupation, dob, contactInfo) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
// //create an object that represents a person contact info
//
//
// let person2 = new Person(
//     ["Joe","Swanson"],
//     "Police",
//     "03/26/1987",
//     new ContactInfo(
//     "214.654.2134",
//     "3820 peter rd",
//     "Carrollton",
//     "TX",
//     "75007",
//     "smithrobert@gmail.com"));
//
// console.log(person2);
//
// function getNames(){
//     let namesArr =[];
//     let hasMoreNames = true;
//     while (hasMoreNames){
//         //getting the names
//         namesArr.push(prompt("Please enter your desired name"));
//         //if they want to get out of the loop
//         hasMoreNames = confirm("Would you like to enter another name?");
//     }
//     return namesArr;
// }
//
// //console.log(getNames());
//
// let person1 = new Person(getNames(),)
// console.log(person1);

function ifNumber(num){
    return num === parseInt(num);
}

let numbers = {
    number: 25,
    stringNumber:"25"
}

console.log(ifNumber(25));//number should return true
console.log(ifNumber("25"));//string should return false
console.log(ifNumber(true));//boolean should return false
console.log(ifNumber([25, 26]));//array should return false
console.log(ifNumber(numbers.number))//object of numbers.number should be false
console.log(ifNumber(numbers.stringNumber))//object if numbers.stringNumbers should return false