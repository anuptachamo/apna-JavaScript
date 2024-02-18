/**
 * ? Reduce
 *      Reduces the array to a single value
 *
 *      arr.reduce( reducer function with 2 variables for (accumulator, element));
 */

let arr = [1, 2, 3, 4];
let result = arr.reduce((res, el) => {
    console.log(res);
  return res + el;   //1+2+3+4 = 10
});

console.log(result);
