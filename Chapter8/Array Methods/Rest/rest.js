/**
 *  ?Rest
 *      Allows a function to take an indefinite number of arguments and bundle them in an array
 */

function sum(...args) {
  return args.reduce((add, el) => {
    return add + el;
  });
}

console.log(sum(1, 2, 3, 4));

//next example
function min(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

console.log(min("min",2, 4, 1, 5, 7, 9, 0));

