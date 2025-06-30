let str = "Lalit Lamba";
console.log(str);
console.log("length of the string is", str.length);
console.log(str[6]);

// Template literals
`This is a template literal`;
console.log(`The length of the string is ${str.length}`);
let cost = 10 ;
let add = "chindaliya";
console.log(`hey yesterday i bought an amazing pen of ${cost} rupees from an village ${add}` );

//  escape character

console.log("\nEscape\ncharacter");   // used to print in the next line
console.log(`escape \t character`);  // used to get a tab space
let username = prompt("Enter your full name");
username = "@" + username + username.length ;
console.log(username);

