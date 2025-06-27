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
