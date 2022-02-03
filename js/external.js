"use strict";
//console.log("Hello from external javascript");
/*alert("Hello from my website");
let favcolor = prompt("What is your favorite color");
console.log("Great, " + favcolor + " is my Favorite color too! 😎");*/

/*Exercise 3 1
let dayslittele = prompt("how may days are you renting The little mermaid?");
let daysbear = prompt("how many days are you renting Brother Bear?");
let dayherc = prompt("how many day are you renting Hercuales?");
let cost = 3;
let totalcost = (dayherc*cost) + (daysbear*cost) + (dayslittele*cost) ;
alert(totalcost);*/

/* Exercise 3 2
let googlepay = 400;
let facepay = 350;
let amazonpay = 380;
let hourgoogle = prompt("how many hours did you work for google?");
let hourface = prompt("how many hours did you work for facebook?");
let houramazon = prompt("how many hours did you work for amazon?");
let total = (googlepay*hourgoogle) + (facepay * hourface) + (amazonpay*houramazon)
alert("$"+ total); */

/* Exercise 3 3
let classmax = 20;
let currentamount = 19;
let con = confirm("will you take the class");
let schedule = false;
if(con){
    ++currentamount;
    schedule = confirm("does 8:00 AM to 9:00am work for you?");
}
console.log(currentamount)
if(currentamount <= classmax && schedule === true){
    alert("See you in class");
}else if(currentamount > classmax && schedule === true) {
    alert("sorry class is full");
}else{
        alert("no class for you");
    }*/

let amountbought = prompt("how many items did you buy?");
let minitems = 2;
let premMember = confirm("are you a premium member?");
let expire = confirm("is the items expired?");
if((amountbought > minitems || premMember === true) && expire === false){
    alert("you can pay for it")
}else{
    alert("you can not buy these items")
}

