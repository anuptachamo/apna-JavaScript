/**
 *  ? create a function to find the min number in an array.
 */

let num = [10, 20, 7, 3, 4, 22];
let result = num.reduce((min, el) => {
  if (el < min) {
    return el;
  } else {
    return min;
  }
});

console.log(result);
