/**
 *  ?Qs1. Square and sum the array elements using the arrow function and then find the average of the array
 */

let nums = [1, 2, 3, 4, 5];

const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur);
console.log(sum);

let avg = sum / nums.length;
console.log(avg);
