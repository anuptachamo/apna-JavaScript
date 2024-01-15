/**
 *  ? Logical Operators
 *      *Logical Operators to combine expressions
 */



// Logical Operators
let x = 5;
let y = 5;
console.log(x<y && x==5)  // true true = true   -- In AND condition,if both condition are true then only condition will be true.
// x && y && console.log(5)

console.log(x>y || x==5)  // true false = true  --in OR condition, if one condition is true the whole condition will be true. 
// x || y || console.log(5)

console.log(!false)       // In LOGICAL NOT, if condition is false, it RETURN TRUE. If TRUE then RETURN False. 
console.log(!true)


// example for logical operators
let marks = 75;

if ((marks > 33 && marks <=80) || !false){
    console.log("Pass");   //true
}