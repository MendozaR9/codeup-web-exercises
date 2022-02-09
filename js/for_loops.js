"use strict"
function showMultiplicationTable(number){
    for (var i = 1; i <= 10; i++){
        console.log(number +" x "+i+" = "+number*i);
    }
}
showMultiplicationTable(7)

for (var i = 1; i <= 10; i++){
    var random = Math.floor(Math.random()*201)+20;
    if (random % 2 == 1){
        console.log(random + " is odd");
    }else {
        console.log(random + " is even");
    }
}