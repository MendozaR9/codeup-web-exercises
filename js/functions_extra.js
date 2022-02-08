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

function half(n){
    return n/2;
}

console.log(half(prompt("type a number an ill half it")))

function triple(n){
    return n*3;
}

console.log(triple(prompt("type a number an ill triple it")));

function quadruple(n){
    return n*4;
}
console.log(quadruple(prompt("type a number an ill quadruple it")));

function subtract(num1, num2){
    return num1 - num2;
}

console.log(subtract(prompt("Give me the first number to subtract"), prompt("give me the second")))

function multiply(num1, num2){
    return num1*num2;
}
console.log(multiply(prompt("Give me the first number to multiply"), prompt("give me the second")))

function isEven(number){
    if (number % 2 === 0){
        return number+ " is even"
    }else{
        return number+" is not even"
    }
}

console.log(isEven(2))

function isOdd(number){
    if (number % 2 === 0){
        return number+" is not Odd"
    }else{
        return number+" is Odd"
    }
}

console.log(isOdd(3))

function divide(num1, num2){
    return num1/num2;
}
console.log(divide(prompt("Give me the first number to divide"), prompt("give me the second")))

function isFive(number){
    if (number == 5){
        return number + " is 5 😎"
    }else {
        return  number + " is not 5 🙃"
    }
}

console.log(isFive(prompt("type in the number 5")))

function trim(string){
    return string.trim();
}

console.log(trim(" hello "));

function rollDice(sidesOfDice){
    let luckyNumber = Math.floor(Math.random() * sidesOfDice)+1;
    return "You rolled "+luckyNumber;
}

console.log(rollDice(prompt("how many sides the dice should have")))