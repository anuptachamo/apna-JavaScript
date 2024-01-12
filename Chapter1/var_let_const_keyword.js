/**
 *  ? let keyword
 *      *syntax of declaring variables
 *          let age = 23;
 *          age = age + 1;
 * 
 *          let cgpa;
 *          let cgpa = 8.9
 * 
 *          let num1 = 1;
 *          let num2 = 2;
 *          let sum = num1 + num2;
 */

console.log("let, variables and const")

// alway use let because var is a oldest method 
// for example is you use var
// {
var f = 23;
var f = "tachamo";
console.log(f); 


// // console.log(a);   //In this case the variable #a will printed twice

// if you use let then,

let a = 23;
// let a = "tachamo";  //you a not able to create with same identifier
console.log(a);   //output = 23

let b = 5;

// const is use for permanent value
const author = "Anup";
// author = 6;        //Throws an error because constant cannot be changed
// const anup;
let c = null;
let d = undefined;

console.log(author, c, d)