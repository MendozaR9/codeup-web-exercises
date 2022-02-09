"use strict"
// let count = 0;
// let number = 2
// while(count <= 15){
//     console.log(number);
//     number *= 2;
//     count++;
// }

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var numberOfConesSold;
console.log("I have "+allCones+" cones");
do {
    //console.log(allCones);
     numberOfConesSold = Math.floor(Math.random() * 5) + 1;

    if (allCones >= numberOfConesSold){
        console.log(numberOfConesSold + " Cones sold");
        allCones = allCones - numberOfConesSold;
    }else {
        console.log("I cannot sell you "+numberOfConesSold+" I only have "+ allCones);

    }

}while (allCones >= 1);
console.log("Yay! I sold them all!")