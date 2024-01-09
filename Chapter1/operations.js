console.log("Operators in Js")

// Arithematic Operators
let a = 10
let b = 2
console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a / b = ", a/b)
console.log("a * b = ", a*b)

// Modulus (remainder operator)
console.log("a % b = ", a%b)   //output =show remainder

// Exponentiation ( power operators) --yo ni bujena 
console.log(" power operator of a ** b = ", a**b) 

// Increment
let c =3
console.log("++c = ", ++c)
console.log("c++ = ", c++)
console.log("c = ", c)

// Decrement
d = 5
console.log("d-- = ", d--)
console.log("--d = ", --d)
console.log("d = ", d)



//Assignment Operators
let assignment = 1;
assignment  += 5  //same as assignment + 5 , x= x+y =1 + 5 =6
console.log(assignment)

assignment  -= 5  //same as assignment - 5 , x= x-y = 6-5 = 1
console.log(assignment)

assignment  *= 5  //same as assignment * 5 ,x= x*y = 1*5 = 5
console.log(assignment)

assignment  /= 5  //same as assignment / 5 ,x= x/y = 5/5 = 1
console.log(assignment)

assignment  %= 5  //same as assignment % 5 ,x= x%y = 5%5 = 1
console.log(assignment)

assignment  **= 5  //same as assignment ** 5 ,x= x**y = 1*1*1*1 = 1   --yo bujena 
console.log(assignment)


// Comparison operators
let comp1 = 4;
let comp2 = 7;

let comp3 = 2;
let comp4 = "2";
console.log("comp1 == comp2 is: ", comp1 == comp2)   //use to check value is equal or not
console.log("comp1 != comp2 is: ", comp1 != comp2)   //not equal to
console.log("comp3 === comp4 is: ", comp3 === comp4) //use to check value and datatypes are equal or not 
console.log("comp3 !== comp4 is: ", comp3 !== comp4) //not equal value or not equal datatype
console.log("comp1 > comp2 is: ", comp1 > comp2)
console.log("comp1 < comp2 is: ", comp1 < comp2)




// Logical Operators
let x = 5;
let y = 5;
console.log(x<y && x==5)  // true true = true   -- In AND condition,if both condition are true then only condition will be true.
// x && y && console.log(5)

console.log(x>y || x==5)  // true false = true  --in OR condition, if one condition is true the whole condition will be true. 
// x || y || console.log(5)

console.log(!false)       // In LOGICAL NOT, if condition is false, it RETURN TRUE. If TRUE then RETURN False. 
console.log(!true)

//understanding about ? operator
const isNepali = true
/*
if (isNepali){
    console.log("Nepali honi")
}else{
    console.log("haina")
}
*/

// ?:
// (condition) ? <true/>  : <false/>
// isNepali ? console.log("Nepali honi")  : console.log("Hoina ni")  //line no. 78-82 ma j vaneko xa teii vaneko ho yesle ni
console.log(isNepali ? "Nepali honi"  : "Hoina ni")  //line no. 87 and 88 meaning is same 

// ?? --it is used to provide a default value for a variable or expression when the value on the left hand side is null or undefined.
let isCoder;
console.log(isCoder ?? "Hacker");  //isCoder ko value null vayo le default value lai linxa but if isCoder ko value xa vaney isCoder ko naii value linxa
