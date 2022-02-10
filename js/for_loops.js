"use strict"
function showMultiplicationTable(number){
    for (var i = 1; i <= 10; i++){
        console.log(number +" x "+i+" = "+number*i);
    }
}
showMultiplicationTable(prompt("Type in a number to get a multiplication table"));

for (var i = 1; i <= 10; i++){
    var random = Math.floor(Math.random()*201)+20;
    if (random % 2 === 1){
        console.log(random + " is odd");
    }else {
        console.log(random + " is even");
    }
}
let number = 1;
let numberString =number;
//console.log(number)
for (let i = 1; i <=9; i++){
    console.log((i+"").repeat(i));
}

for (var num = 100; num >= 5; num -= 5){
    console.log(num);
}
