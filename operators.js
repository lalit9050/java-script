console.log(" ");
console.log("operators");
console.log("Airthmetic operators:-");

let m = 10 , n = 2;
console.log(" m :", m, " & n :", n );
console.log(" m + n :" , m + n);    // Addition
console.log(" m - n :", m - n );    // Subtraction
console.log(" m * n :", m * n);     // Multiplication
console.log(" m / n :", m / n);     // Division

console.log(" m % n :" , m % n);    // Modulus
console.log(" m ** n( m^n) :", m**n);     // Exponentiation m^n

console.log(" ");
console.log("unary operator");
console.log(" increment operator :",m++ , m , ++m);     // Increment operator
console.log(" decrement operator :", --m, m-- , m );    // Decrement operator

console.log(" ");
console.log("Assignment operator:");
console.log(" m = :" , m);    // m =10;
console.log(" m += :", m += 2);     // m = m + 2  , m = 12
console.log(" m -= :" , m -= 3);   // m = m - 3 , m = 9
console.log(" m *= :" , m *= 3);    // m = m * 3 ,  m = 27
console.log(" m /= :" , m /= 3);    // m /= m / 3 , m = 9
console.log(" m %= :" , m %= 4);    // m /= m % 4 , m =1;
m += 4;
console.log("m **= :" , m **= 3);   // m **= m ** 3, m = 125;

console.log(" ");
console.log("Comparision operator :");
m = 5, n = 5;
console.log("5 == 5 :" , m == n);      // checks m is equals to n or not that is true
n++;                                   // increment done
console.log("5 == 6 :", m == n);       // false
console.log( "5 != 6: ", m != n);       // 5 is not equal to 6 that is true
n--;
console.log( "5 != 5: ", m != n);       // 5 is not equal to 5 so false
n += 4 ;
console.log( m ,  ":", n , m >= n );
console.log( m ,  ":", n , m <= n );
let o = "5";
console.log(" m == o :", m == o);     // the string datatype is converted into number than the comparision is done
console.log(" m === o :", m === o);     // === is used to compare strictly here datatype not be converted similary we have !==
console.log(" m !== o :", m !== o);








