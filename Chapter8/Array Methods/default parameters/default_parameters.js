/**
 *  ? Defaullt Parameters
 *      Giving a default value to the arguments
 *
 *      function func (a,b = 2){
 *              do something
 *      }
 */

function sum(a, b = 3) {
  return a + b;
}

console.log(sum(1));
