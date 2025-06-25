JAVA SCRIPT:-
            java script is an programming language which is used to gave intrustions and we will get output in result.it can directly run on any browser, eg- chrome on console pannel .

console.log(" hello..! "); :-
                it is an basic command of java script which is used in vs code which helps to write anything which is in " ".

from vs code we can not access direct the js , we need an basic html file and we link that html file to java script and by help of that html file we can access the js and run it on any browser .

VARIABLES IN JS:-
                variables are like an container to store some type of data and information.we can simply declare it by any names like fullName, a,b, age , price ,etc and we can store any type of data in it but for better understanding we gave the variables an proper name and store values or data according to it . Also there are some reserved words (keywords) in java script like console , log , var , let , const, and many more , we can't declare these words variables.
                eg:- fullName= "lalit kishor singh"; (any string will be written between " " or ' ')
                     age = 23;

    we can use these variables to show or print like console.log(fullName); , console.log(age);

    There are also some rules to declare variables such that:-
1.  we can't use those reserved keywords as name of any variables.
2.  we can't use space between two names.
    eg- full name= "lalit"; - we get error if we declare the variable like this , the correct way is mentioned below-
        fullName = "Lalit Kishor Singh";
3. we can't use any numberic ahead of letters, we can use only _ , $ and letter at starting 
4. only letters , numeric digits , $ , _ are used after variables name.
    eg- fullName123, age_ , price$ .
5. variables name are case senstive ( fullname, FULLNAME both are different variables)

we can store null and undefined values :-
    eg- age = null ; 
        console.log(age); ---( result is null which means that their null value that age contains)

        age; (an varible is declared without assigning any value or data )
        console.log(age);---( result is undefined which means that the variable age contains some value but we have no information about it)

we can name the variables without using any keywords directly but we can use some keywords like var , let and const for our better understanding which are explained below:-

var:- variables can be re-declared and updated and have a global scope variable( which means we can use the variables any where in the code)
      eg:- var age = 23;
            var age = 24;
            var age = 43; 

            console.log(age);---- ( result will be 43 because the value of age is updated in next line and then again updated and the age variable is declared again and again using var)

let:- variables can not be re-declared but can be updated and have block scope variables.( which means that we can call or use the variables with in a block)
      eg:- let age = 43;
           we can not re-declared age like we can do it using var but we can update the value of age if we want it, we will mostly use it rather than var.

           age = 23; ( value of age variable is now updated)
           console.log(age);----(result is 23 as value is updated)

           let age ;
           console.log(age);--- (result is undefined because we declared the variable but did not assign any value in it)
        
const:- variables can not be re-declared and can not be updated and have block scope variables.
        eg:- const PI = 3.14
         it is used for that varibles which have constant value like pi in maths and using const we can't change or update the values if we did we got error.
         console.log(PI)----( result is 3.14)
  in java script let and const are introduced in 2015 before 2015 their is only var.


