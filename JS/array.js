console.log("\nArray");

let arr = [20, 45, 63, 62,134,65];
console.log(arr);
console.log(arr[0]);
console.log("print all the elements of array");

for(let i = 0 ; i< arr.length; i++){
    console.log(arr[i]);
}
console.log("printing all the elements of array using for of loop");

for(let el of arr){
    console.log(el);
}

console.log("find the average of the array");
let studentMarks = [85, 97 , 44, 37, 76, 60];

let sum = 0 ;
for(let i = 0 ; i <studentMarks.length; i++){
    sum = sum + studentMarks[i];
}
let average = sum / studentMarks.length;
console.log(studentMarks);
console.log(`the average of the given array is ${average}`);

console.log(`\nfor a given array of the prices of item apply an offer of 10% and change the prices of the array`);

let price = [250, 645, 300 , 900, 50];
console.log(`the price of items before discount ${price} `);
for(let i = 0; i < price.length; i++){
    let discount =  price[i]* 10/100;
    // console.log(discount);
    price[i] = price[i] - discount;
}
console.log(`the price of items after 10% discount is ${price}`);
console.log(`\n practice ques`);
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
