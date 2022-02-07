"use strict"
//Simple Function Drills
function returnTwo(num1, num2){
    let returnNums = num1 + " " + num2;
    return returnNums;
}

console.log(returnTwo(3,2))

function sayHowdy(){
    console.log("Howdy!");
}
sayHowdy()

function returnsName(name){
    return name;
}

console.log(returnsName("Ryan"));

function addsThree(num1){
    return num1 + 3;
}

console.log(addsThree(5));

function sayString(String){
    return String
}

console.log(sayString("codeup"));

function identity(input){
    return input;
}

console.log(identity(prompt("type in something")));

function addsFive(number){
    return parseInt(number) + 5;
}

console.log(addsFive(prompt("type in a number it will add five to it")));

function NotZero(number){
    if(number == 0){
        return false;
    }else{
        return true;
    }
}

console.log(NotZero(prompt("type is a number that is not zero")));

function isZero(number){
    if(number == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isZero(prompt("type is a number that is zero")));

function double(num){
    return parseInt(num) *2;
}

console.log(double(prompt("type in a number an I will double it")));