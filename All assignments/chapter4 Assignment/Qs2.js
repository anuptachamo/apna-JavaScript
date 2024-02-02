/**
 *  ? Write a JS program to find the no of digits in a number.
 *          Example : if number = 287152, count = 6
 */

let number = 2871522;
console.log(typeof number)

let numberAsString = number.toString();
console.log(typeof numberAsString)

let lengthOfNumber = numberAsString.length;
console.log(`Length of the number : ${lengthOfNumber}`)