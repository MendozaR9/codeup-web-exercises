"use strict"
function showMultiplicationTable(number){
    for (var i = 1; i <= 10; i++){
        console.log(number +" x "+i+" = "+number*i);
    }
}
showMultiplicationTable(prompt("Type in a number to get a multiplication table"));

function randomOddOrEven(min, max) {
    for (var i = 1; i <= 10; i++) {

        var random = Math.floor(Math.random() * (parseInt(max)-min+1)) + parseInt(min);
        if (random % 2 === 1) {
            console.log(random + " is odd");
        } else {
            console.log(random + " is even");
        }
    }
}
randomOddOrEven(prompt("Give me a minmum"), prompt("give me a maxmium"));

function numberTree(){
    for (let i = 1; i <= 9; i++) {
        console.log((i.toString()).repeat(i));
    }
}
numberTree();

function minusFive() {
    for (var num = 100; num >= 5; num -= 5) {
        console.log(num);
    }
}
minusFive();
