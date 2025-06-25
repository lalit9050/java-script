console.log(" ");
console.log("datatypes in JS");
console.log("primitive datatype:")
let fullName = "Lalit Lamba";
console.log(fullName, ":", typeof fullName);

let age = 22;
console.log(age, ":", typeof age);

let isfollow = true;
console.log(isfollow, ":", typeof isfollow);

let s = null;
console.log(s, ":", typeof s);

let a ;
console.log(a, ":", typeof a);

let x = BigInt("123");
console.log(x, ":", typeof x);

let y= Symbol(" hello...!");
console.log(y, ":", typeof y);

console.log(" ");
console.log("non-primitive");
console.log("object");
const student = {
    yourName: "kallu kaliya",
    rollNo: 40,
    cgpa: 9.2,
    isPass: true,
};
console.log(student);
console.log(student.yourName);
student.yourName = "bheem ";
console.log(student.yourName);




