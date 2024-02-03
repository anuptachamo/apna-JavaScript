/**
 *  ? Random Integers
 *      from 1 to 10
 *          step 1: let num = Math.random();
 *          step 2: num = num * 10;
 *          step 3: num = Math.floor(num);
 *          step 4: num = num +1;
 */

let step1 = Math.random();
console.log(step1);

let step2 = step1* 10;
console.log(step2);

let step3 = Math.floor(step2)    //value lai roundOf gareko [floor ma less than or equal to use hunxa]
console.log(step3)

let step4 = step3 + 1;
console.log(step4)

//short one
let random = Math.floor(Math.random() * 10) +1;
console.log(random)