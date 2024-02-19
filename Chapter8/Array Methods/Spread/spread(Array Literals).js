/**
 *  ?Spread with Array Literals
 */

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr]; //copy of arr

console.log(newArr);

// next example
let char = [..."hello"];
console.log(char);

// next example
let odd = [1, 3, 5, 7];
let even = [2, 4, 6, 8];

let nums = [...odd, ...even];
console.log(nums);
