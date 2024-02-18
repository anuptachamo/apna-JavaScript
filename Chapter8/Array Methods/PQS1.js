/**
 *  ? Check if all numbers in our array are multiples of 10 or not.
 */


// every method use gareko kna ki yo method ma euta value false vayo vaney sabai false hunxa
let num = [10, 20, 30, 5];
let result = num.every((el) => {
  return num % 10 === 0;
});

console.log(result);
