/**
 *  ? some Method
 *      The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
 *
 *  (Return true if every element of arry gives true for some function. Else returns false.)
 *      *arr.every(some function definition or name);
 */

// for example(In this every method, euta  value false vayo vaney sabaii condition  false hundaina, simply it is as same as OR operator)
let arr = [1, 2, 3, 4];
let result = arr.some((el) => {
  return el % 2 === 0;  //this is a callback value
});

console.log(result);