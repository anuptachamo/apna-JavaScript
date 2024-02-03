/**
 *  ? Function Scope
 *      Variables defined inside a function are not accessible (visible) from outside the function. when global scope and function scope fight always function scope win because function scope is more specify
 */
let sum = 60;  //global scope
function calSum(a, b){
    let sum = a + b; //function scope
    console.log(sum)
}

calSum(1,2)