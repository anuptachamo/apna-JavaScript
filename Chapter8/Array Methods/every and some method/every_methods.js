/**
 *  ? Every Methods
 *      The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 *
 *  (Return true if every element of arry gives true for some function. Else returns false.)
 *      *arr.every(some function definition or name);
 */

// for example(In this every method, euta matra value false vayo vaney sabaii condition naii false huna janxa, simply it is as same as AND operator)
let arr = [1, 2, 3, 4];
let result = arr.every((el) => {
  return el % 2 !== 0;  //this is a callback value
});

console.log(result);