"use strict";
/* TODO: MINI-EXERCISE:
*   -> Write a function named getName() which will return the result of the user inputting their name(s)
*   -> Console log the invocation of getName() to ensure it works properly
*   -> Now, write a function named showName(username).
*       -> It takes in 'username' as an argument and alerts the user to their name
*       -> Pass an invocation of getName() as an argument to the invocation of showName()
*       -> showName() should be void function. That is, it should not return a value - only execute code
*   -> Test to ensure your code is working as expected
* */
// function getName() {
//     return prompt("What is your name")
// }
//
// // console.log(getName())
//
// function showName(username){
//     alert("your name is " + username);
// }
// showName(getName());
//
// function isLowerCase(Letter){
//     if (Letter.toLowerCase()){
//         return true
//     }else{
//         return false
//     }
// }
// isLowerCase(getName());

function double(n){
    return (n * 2);
}
console.log(double(prompt("Type a number")))

function areIdentical(input1 , input2){
    if(input1 === input2){
        return true;
    }else{
        return false
    }
}

console.log(areIdentical(prompt("Type a number"), prompt("Type a number"),))