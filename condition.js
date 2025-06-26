console.log(" ");
console.log("CONDITIONS IN JAVASCRIPT :-");
console.log(" if statement-");
let age = prompt("enter your age:");
if ( age >=18){
    console.log(  age , "you're greather than 18 , you can vote.");
}

console.log(" if-else statement-");
if( age >= 18){
    console.log( age, "you're able to vote.");
} else{
    console.log(age , " you can not vote.");
}

console.log("else if statements-");
let mode = prompt("enter the color of mode:");
let color;
if(mode === "black"){
    color = "black";
}
else if( mode === "grey"){
    color = "grey";
}
else if( mode === "light grey"){
    color = " light grey";
}
else{
    color =" white ";
}
console.log(color);
console.log("switch case-");
let choice = prompt("enter your choice from 1 to 4 ");
switch( choice){
    case "1" : console.log("choice is ", choice);
    break;
    
    case "2" : console.log("choice is ", choice);
    break;

    case "3" : console.log("choice is ", choice);
    break;

    case "4" : console.log("choice is ", choice);
    break;

    default : console.log("you entered wrong choice" , choice);
}
console.log("simple practice question-");
// using prompt check the number is multiple of 5 or not

let number = prompt("enter the number:");
if(number % 5 === 0){
    console.log("the number is divisible by 5 i.e ", number);
} else {
    console.log("the number is not divisible by 5 i.e ", number);
}

// write a code which can gave grades to students according to their number 

let marks = prompt("enter your marks from 0 to 100:");
let grade;

if (marks >= 80 &&  marks <= 100 ){
    grade = "A";
}

else if ( marks >= 70 && marks < 80){
    grade = "B";
}
else if ( marks >= 60 && marks < 70){
    grade = "C";
}
else if ( marks >= 50 && marks < 60){
    grade = "D";
    
}
else if ( marks >= 0 && marks < 50){
    grade = "F";
}
else{
    grade = "you have entered wrong number ";
    
}
console.log(grade);
