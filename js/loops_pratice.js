//TODO : Use a while loop to output the number from 8-50
//TODO : Using the same example, output the odd numbers from 8-50
// let increment = 8;
// while (increment <=50){
//     if (increment %2 !== 0) {
//         console.log(increment)
//     }increment++;
// }

let fullNameEntered = false;
let names = "";
// WE DON'T KNOW HOW MANY NAMES THEY HAVE!
while (!fullNameEntered){
    names += prompt("Please enter or add to your name") +" ";

    fullNameEntered = confirm("Is this your full name?");
}
alert("This is your name: " + names);

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
//
let parkingSpace = 30
do {
    console.log("There are "+parkingSpace+" parking space available")
    parkingSpace -= 2;

}while (parkingSpace)
console.log("this parking lot is now full");

//TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.

let password = "hello";
let correctPassword = false;
do {
    let pass =prompt("What is the password?");
    if (pass === password){
        correctPassword = true;
    }else {
        alert("That is the wrong password")
    }
}while (!correctPassword)
alert("Hello you type the correct password")


// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)
for (let i = 0; i <=30; i++){
    if (i %2 === 0){
        console.log(i);
    }
}


// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.
for (let i =1; i<=40; i++){
    if (i %3 ===0 && i % 5 === 0) {
        console.log("marco polo");
    }else if (i % 3===0) {
        console.log("marco");
    }else if (i %5 === 0){
        console.log("polo");
    }else{
        console.log("I'm not playing")
    }
}
