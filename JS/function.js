// create a function which returns the number of vowel in the string which is passed through argument


function vowelCounter(str){
    let vowel = 0;
    for(let i of str ){
        if( i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
        vowel++;
        }
    }
    console.log(vowel);
}

console.log("Arrow function:-")
const vowelCounter2 = (str) =>{
    let vowel = 0;
    for(let i of str ){
        if( i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
        vowel++;
        }
    }
    console.log(vowel);
}
console.log(`\n`);
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.forEach(function square(val){
    console.log(val*val );
})

console.log(`\nFilter out the students who scored 90+ from an given array`);
let marks = [90, 43, 33, 98, 100, 92, 45,76,78 ,91,0,32,41];
console.log(marks);
let stuMarks = marks.filter((val) => {
    return val >90 ;
})
console.log(stuMarks);
console.log(`\nCreate an array from 1 to n where take n as input from user and perform reduce operation(method)`);
let n = prompt("enter any number");
let arrNum = [];
for(let i =1 ; i<= n ; i ++){
    arrNum [i - 1] = i;
}
console.log(arrNum);

let sum = arrNum.reduce((res, curr) =>{
    return res + curr ;
})
console.log(`the sum of all numbers of array is : ${sum}`);

let multi = arrNum.reduce( (res, curr) =>{
    return res * curr ;
})
console.log(`the multiplication of all numbers of array is : ${multi}`);
