/**
 * ?Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
        For example: for array [7, 9, 0, -2] and n= 3
        print [7,9,0]
 */

let arr = [7, 9, 0, -2]
let n = 3;

let result = arr.slice(0, n);  // Use the slice method to get the first n elements
console.log(result)
