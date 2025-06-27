// while loop
// do while loop
// for of loop - for array and string
// for in loop - for object
console.log(" ");
console.log("let's learn the concept of loops today ");
console.log("for loop");

for(let i = 1 ; i<=5 ; i++){
    console.log("i=" , i);
}

console.log("sum of numbers from 1 to n");
let sum = 0;
let n = 100;
for(let i = 1 ; i<=n; i++){
    sum = sum + i;
}
console.log("The sum of first" , n , "numbers are:", sum);

console.log(" ");
console.log("while loop");
let i = 1;
while(i<=5){
    console.log("i=", i);
    i++;
}
console.log(" ");
console.log("do while loop");

i = 1;
do{
    console.log("i=", i);
    i++;
} while(i<=5);

console.log("");
console.log("for of loop");
let str = "lalit kishor singh";
for(let i of str){
    console.log("i=", i);
}

console.log("");
console.log("for in loop");
const student = {
    fullName : "lalit lamba",
    class : "MCA",
    rollNo : 40,
    phoneNo: 9499258679,
};

for( let i in student){
    console.log(i ,":",  student[i]);
}
console.log("");
console.log("some normal practice question");
console.log("print even numbers from 0 to 100 :");

for( let i =0; i<= 100 ; i++){
    if( i % 2 === 0){
        console.log(i);
    }
}
console.log("Creates a game where you start with any random digit number. ask the user to keep guessing the game number until the user enters correct number");

let number = 46 ;
let guessNo = prompt("Let's play a number game .Guess the number which i choose");
let count = 1;

while(guessNo != number){
    
    guessNo = prompt("oops...wrong one.Guess again");
    count++;

}
console.log("congrats... your guess is right in" , count, "chances");